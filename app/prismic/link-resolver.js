export default function (doc) {
    if (doc.type === 'bloghome') {
        return '/'
    } else if (doc.type === 'about') {
        return '/about'
    } else if (doc.type === 'transmitterhome') {
        return '/transmitter'
    } else if (doc.type === 'post') {
        return `/post/${doc.uid}`
    } else if (doc.type === 'transmitterpost') {
        return `/transmitter/post/${doc.uid}`
    }
    return '/'
}