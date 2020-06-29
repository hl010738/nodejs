const userRedisDAO = require("../db/redis/userRedisDAO");

class userService {
    async storeUserId(userSessionId, userId){
        // 如果需要等待异步方法完成，需要await
        await userRedisDAO.storeUserId(userSessionId, userId);
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId){
        await userRedisDAO.getUserIdFromUserSessionByUserSessionId(userSessionId);
    }

    async resetUserSessionExpirationTime(userSessionId){
        await userRedisDAO.resetUserSessionExpirationTime(userSessionId);
    }

    async removeUserSessionByUserSessionId(userSessionId){
        await userRedisDAO.removeUserSessionByUserSessionId(userSessionId);
    }
}

module.exports = new userService();