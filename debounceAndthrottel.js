const myDebounce = (cb,d)=>{
    let timer;
    return (...args)=>{
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{},d)
    }
}

const myThrottle = (cb,d)=>{
    let last = 0;
    return (...args)=>{
        let now  = new Date().getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    }

  
}