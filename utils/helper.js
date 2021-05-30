const helper = {
    dataTrans: {
        dateTimeByNow: () => {
            var date = new Date()
            return helper.common.twoDigits(date.getDate()) + '.' + helper.common.twoDigits((date.getMonth() + 1)) + '.' + helper.common.twoDigits(date.getFullYear()) + ' ' + helper.common.twoDigits(date.getHours()) + ':' + helper.common.twoDigits(date.getMinutes()) + ':' + helper.common.twoDigits(date.getSeconds())
        },
        dateByNow: () => {
            var date = new Date()
            return helper.common.twoDigits(date.getDate()) + '.' + helper.common.twoDigits((date.getMonth() + 1)) + '.' + helper.common.twoDigits(date.getFullYear())
        },
        timeByNow: () => {
            var date = new Date()
            helper.common.twoDigits(date.getHours()) + ':' + helper.common.twoDigits(date.getMinutes())
        },
    },
    common: {
        twoDigits: (value) => {
            value = value.toString()
            if (value.length < 2) {
                value = '0' + value
            }
            return value
        }
    }

}
export default helper;