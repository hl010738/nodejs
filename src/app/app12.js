const util =  require("util");

const obj = {name: "adsfeq",
    city: "beijing",
    married: true,
    getName: function () {
        return this.name;
    }
};

console.log(util.inspect(obj, {
    "colors": true
}));