function danhSachNhanVien(){
    this.arr = [];
    this.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    }
}
// viết prototype ở ngoài trang nào cần sài thì thêm.giải quyết vấn đề về hiệu năng
danhSachNhanVien.prototype.timViTri = function(taiKhoanNV) {
    //mỗi lần find index chạy nó sẽ duyệt qua mảng và mỗi lần lấy ra 1 item "1 item tương ứng vs 1 nhan vien"
    // this.arr.find index trả về index(vi tri) neu tim thay or -1 ko tim thay
    return this.arr.findIndex( function(item){
        // so sánh mã nhân viên truyền vào vs mã nhân viên đang có trong dãy, đúng trả về true sai trả về flase
        return taiKhoanNV === item.taiKhoanNV
    })
}
// xoa 1 phan tu ra khoi mang
danhSachNhanVien.prototype.xoaNV = function(taiKhoanNV) {
    // tra ve vi tri neu tim thay,-1 neu ko tim thay
    var viTri = this.timViTri(taiKhoanNV);
    if(viTri !== -1){
        this.arr.splice(viTri,1);
    }
}

