// lấy dữ liệu api
function apiGetUsers(searchTemp){
    return axios({
        url:"https://630ef0cd498924524a822a4c.mockapi.io/user",
        method:"GET",
        params: {
            hoTen : searchTemp
        },
    });
}

// api thêm mới User
function apiAddUsers(user){
    return axios({
        url:"https://630ef0cd498924524a822a4c.mockapi.io/user",
        method: "POST",
        // cần thêm key data chứa dữ liệu server để tạo mới
        data: user,
    });
}
// xóa
function apiDeleteUsers(userId){
    return axios({
        url:`https://630ef0cd498924524a822a4c.mockapi.io/user/${userId}`,
        method: "DELETE",
    });
}

// lấy thông tin 1 dữ liệu
function apiGetUsersById(userId){
    return axios({
        url:`https://630ef0cd498924524a822a4c.mockapi.io/user/${userId}`,
        method: "GET",
    });
}

//update User
function apiUpdateUsers(userId, user){
    console.log(userId, user)
    return axios({
        url:`https://630ef0cd498924524a822a4c.mockapi.io/user/${userId}`,
        method: "PUT",
        data: user,
    });
}

function apiCheckUser(){
    return axios({
        url:"https://630ef0cd498924524a822a4c.mockapi.io/user",
        method:"GET",
    })
}