export let get = (url, params) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            // method:"POST",
            // headers:{
            //     "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
            // },
            body: params
        })
            .then(res => res.json())
            .then((res) => {
                resolve(res);
            },
                (err) => {
                    reject(err);
                }
            )
    })
}
