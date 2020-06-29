const Redis = require("ioredis");
const redisKeyPrefix = "myRedis:info:user:";

class UserRedisDAO{
    getRedisConnection(){
        //return new Redis.Cluster({ 如果是集群
        return new Redis({
            host: "localhost",
            port: 6379
        });
    }

    async storeUserId(userSessionId, userId){
        const redis = this.getRedisConnection();
        // 存储记录并设置超时时间是1800秒
        redis.set(redisKeyPrefix + "userSessionId", userId, "ex", 1800, (error, result) => {
            // 释放连接
            redis.quit();
        });
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId){
        const redis = this.getRedisConnection();
        return redis.get(redisKeyPrefix + "userSessionId", (error, result) => {

            // 先关闭链接 在返回结果
            redis.quit();
            return result;
        });
    }

    async resetUserSessionExpirationTime(userSessionId){
        const redis = this.getRedisConnection();
        redis.expire(redisKeyPrefix + userSessionId, 1800, (error, result) => redis.quit());
    }

    async removeUserSessionByUserSessionId(userSessionId){
        const redis = this.getRedisConnection();
        redis.del(redisKeyPrefix + userSessionId, (error, result) => redis.quit());
    }

}

module.exports = new UserRedisDAO();