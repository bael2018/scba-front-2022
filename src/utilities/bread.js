export function breadCrumbPath (item) {
    const arr = item.split('').map(item => {
        if(item === '-'){
            return item = ' '
        }else if(item === ' '){
            return item = ''
        }else{
            return item
        }
    })

    const spreadArray = arr.join('').split(' ')

    if(spreadArray.length > 2){
        const thirdBread = spreadArray.pop()
        const secondBread = spreadArray.pop()
        const firstBread = spreadArray.pop()

        return {
            first: firstBread,
            second: secondBread,
            third: thirdBread
        }
    }else{
        const secondBread = spreadArray.pop()
        const firstBread = spreadArray.pop()
        
        return {
            first: firstBread,
            second: secondBread,
        }
    }
}