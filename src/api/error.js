const errorMsg = {
    '4000': 'Bad Requset', // 请求格式错误
    '4001': 'Email is not valid', // 邮箱地址不合法
    '4002': 'Username is not valid', // 用户名不合法
    '4003': 'Password is too short', // 密码太短了
    '4004': 'Username is too long', // 用户名太长了
    '4005': 'Language not support', // 语言不支持
    '4006': 'Payload not valid', // 代码格式错误
    '4007': 'Too much output', // 代码输出太多
    '4010': 'Wrong Password', // 密码错误
    '4011': 'You need login to like code', // 对代码点赞需要登录
    '4012': 'ResetTokenNotMatch', // 重置密码的token错误
    '4030': 'Get Code Not Allowed', // 没有权限获取代码
    '4031': 'Update Code Not Allowed', // 没有权限更新代码
    '4032': 'Delete Code Not Allowed', // 没有权限删除代码
    '4040': 'User Not Exist', // 用户不存在
    '4041': 'Code Not Exist', // 代码不存在
    '4042': 'EmailNotExist', // 邮箱不存在
    '4080': 'Time out', // 代码超时
    '4090': 'User Already Exist', // 用户已经存在了
    '4091': 'Email Already Exist', // 邮箱地址已经存在了
    '4092': 'Already Liked', // 已经点过赞了

    '5001': 'ServerErr Register Failed', // 注册失败 服务器错误
    '5002': 'ServerErr Create Code Failed', // 创建代码失败 服务器错误
    '5003': 'ServerErr Get Code Failed', // 获取代码失败
    '5004': 'ServerErr Like Code Failed', // 点赞失败
    '5005': 'Run code error', // 运行代码错误
    '5006': 'Send reset email Failed', // 发送重置密码邮件失败
    '5007': 'Update Password Failed' // 更新密码失败
}

export { errorMsg }
