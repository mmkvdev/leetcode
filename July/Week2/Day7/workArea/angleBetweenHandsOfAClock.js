const clockAngle = (h,m) => {

    // hours angle
    let hours_angle = (h*60+m)*0.5;

    // minutes angle
    let minutes_angle = m*6;

    // angle 
    let angle = Math.abs(hours_angle-minutes_angle);

    return Math.min(angle,360-angle);
}

// console.log(clockAngle(12,30));
// console.log(clockAngle(3,30));
// console.log(clockAngle(3,15));
// console.log(clockAngle(4,50));
console.log(clockAngle(12,0));