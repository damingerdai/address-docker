export const isArray = (data: any): boolean => {
    if(!Array.isArray){
        return Object.prototype.toString.call(data)==='[object Array]'
    } else {
        return Array.isArray(data);
    }
}