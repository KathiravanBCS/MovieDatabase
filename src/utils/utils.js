export function converMinutes(minutes){
    const hours=Math.floor(minutes/60);
    const remainMinutes =minutes % 60;
    return `${hours}h ${remainMinutes}m`;
}