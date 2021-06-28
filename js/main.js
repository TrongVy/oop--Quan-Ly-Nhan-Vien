function getElm(id){
    return document.getElementById(id);
}
var dsnv = new danhSachNhanVien();
var validator = new Validator();

// in danh sach nhan vien
function inDsnv(arr){

    var content = '';
    arr.map( (nv,index) => {
        content +=`
            <tr>
                <td>${nv.taiKhoanNV}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td style="display:flex">
                <button class="btn btn-info" data-toggle="modal"
                data-target="#myModal"  onclick="updateNV('${nv.taiKhoanNV}')"
                >Sửa</button>
                <button class="btn btn-danger" onclick ="xoaNhanVien('${nv.taiKhoanNV}')">Xóa</button>
                </td>
            </tr>
        `;
    });
    getElm('tableDanhSach').innerHTML =content;
}
// sau khi xoa can hien thi lai danh sach nhan vien
function xoaNhanVien(taiKhoanNV){
    dsnv.xoaNV(taiKhoanNV);
    inDsnv(dsnv.arr);
    setLocal(dsnv.arr);
}
// set localStorage
function setLocal(arr){
    return localStorage.setItem('DSNV', JSON.stringify(arr));
}
// get Item 
function getLocal(){
    if(localStorage.getItem('DSNV')){
        dsnv.arr = JSON.parse(localStorage.getItem('DSNV'));
        inDsnv(dsnv.arr);
    }
}
getLocal();

// lay thong tin tu nguoi nhap
btnThemNV.addEventListener('click',() =>{
  
    var taiKhoanNV = getElm('tknv').value;
    var tenNV = getElm('name').value;
    var emailNV = getElm('email').value;
    var ngayLam = getElm('datepicker').value;
    var luongCoBan = getElm('luongCB').value;
    var chucVu = getElm('chucvu').value;
    var gioLam =getElm('gioLam').value;
    var passWord =getElm('password').value;
    console.log(passWord);
    var isVali = true;
    
    isVali &= validator.kiemTraRong(taiKhoanNV,'tbTKNV','(*) tài khoản nhân viên không được rỗng!')&&
        validator.kiemTraDoDai(taiKhoanNV,'tbTKNV','(*) độ dài mã NV nhập vào từ 4 đến 6 kí tự');

    isVali &= validator.kiemTraRong(tenNV, 'tbTen', '(*) Tên nhân viên không được rỗng')
        && validator.kiemTraKiTu(tenNV, 'tbTen', '(*) Vui lòng nhập vào chuỗi');  

    isVali &= validator.kiemTraRong(emailNV, 'tbEmail', '(*) email không được rỗng')
        && validator.kiemTraEmail(emailNV, 'tbEmail', '(*) nhập sai email');  

    isVali &= validator.kiemTraRong(passWord, 'tbMatKhau', '(*) passWord không được rỗng')
        && validator.kiemTraPassword(passWord, 'tbMatKhau', '(*) mật Khẩu từ 8-16 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống');  
    
        isVali &= validator.kiemTraRong(ngayLam, 'tbNgay', '(*) ngayLam không được rỗng')
        && validator.kiemTraNgayLam(ngayLam, 'tbNgay', '(*) Date format dd/MM/yyyy validation');  

    isVali &= validator.kiemTraRong(luongCoBan, 'tbLuongCB', '(*) luongCoBan không được rỗng')
        && validator.kiemTraLuong(luongCoBan, 'tbLuongCB', '(*) Lương cơ bản 1 000 000 - 20 000 000');  

    isVali &= validator.kiemTraRong(chucVu, 'tbChucVu', '(*) Chức Vụ không được rỗng')
        && validator.chonChucVu(chucVu, 'tbChucVu', '(*) vui lòng chọn chức vụ');  
    isVali &= validator.kiemTraRong(gioLam, 'tbGiolam', '(*) Giờ làm không được rỗng')
        && validator.kiemTraGioLam(gioLam, 'tbGiolam', '(*) Số giờ làm trong tháng 80 - 200 giờ');  
    if(!isVali){
        return;
    }

    var nhanVien = new NhanVien(taiKhoanNV,tenNV,emailNV,ngayLam,luongCoBan,chucVu,gioLam,passWord);
    dsnv.themNhanVien(nhanVien);
    inDsnv(dsnv.arr);
    setLocal(dsnv.arr);

})
// btnThemNV.style.display ='none';
// btnCapNhat.style.display ='none';
btnThem.addEventListener('click', function() {
    getElm('form').reset();
    btnThemNV.style.display ='block';
    btnCapNhat.style.display ='none';
  
})
// function edit
function updateNV(taiKhoanNV) {
    var x = dsnv.timViTri(taiKhoanNV);
    // console.log(x)
    // var y =document.querySelectorAll('tr');
    // console.log(y);
    btnCapNhat.style.display ='block';
    btnThemNV.style.display ='none';
    getElm('tknv').value = dsnv.arr[x].taiKhoanNV;
     getElm('name').value  = dsnv.arr[x].hoTen; ;
     getElm('email').value = dsnv.arr[x].email;;
     getElm('datepicker').value = dsnv.arr[x].ngayLam;;
     getElm('luongCB').value = dsnv.arr[x].luongCoBan;;
     getElm('chucvu').value = dsnv.arr[x].chucVu;;
    getElm('gioLam').value = dsnv.arr[x].gioLamTrongThang;;
    getElm('password').value = dsnv.arr[x].password;
    btnCapNhat.addEventListener('click', function() {
       
            // console.log(dsnv.arr[x])
            var taiKhoanNV = getElm('tknv').value;
            var tenNV = getElm('name').value;
            var emailNV = getElm('email').value;
            var ngayLam = getElm('datepicker').value;
            var luongCoBan = getElm('luongCB').value;
            var chucVu = getElm('chucvu').value;
            var gioLam =getElm('gioLam').value;
            var passWord =getElm('password').value;
            var isVali = true;
    
            isVali &= validator.kiemTraRong(taiKhoanNV,'tbTKNV','(*) tài khoản nhân viên không được rỗng!')&&
                validator.kiemTraDoDai(taiKhoanNV,'tbTKNV','(*) độ dài mã NV nhập vào từ 4 đến 6 kí tự');
        
            isVali &= validator.kiemTraRong(tenNV, 'tbTen', '(*) Tên nhân viên không được rỗng')
                && validator.kiemTraKiTu(tenNV, 'tbTen', '(*) Vui lòng nhập vào chuỗi');  
        
            isVali &= validator.kiemTraRong(emailNV, 'tbEmail', '(*) email không được rỗng')
                && validator.kiemTraEmail(emailNV, 'tbEmail', '(*) nhập sai email');  
        
            isVali &= validator.kiemTraRong(passWord, 'tbMatKhau', '(*) passWord không được rỗng')
                && validator.kiemTraPassword(passWord, 'tbMatKhau', '(*) mật Khẩu từ 8-16 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống');  
            
                isVali &= validator.kiemTraRong(ngayLam, 'tbNgay', '(*) ngayLam không được rỗng')
                && validator.kiemTraNgayLam(ngayLam, 'tbNgay', '(*) Date format dd/MM/yyyy validation');  
        
            isVali &= validator.kiemTraRong(luongCoBan, 'tbLuongCB', '(*) luongCoBan không được rỗng')
                && validator.kiemTraLuong(luongCoBan, 'tbLuongCB', '(*) Lương cơ bản 1 000 000 - 20 000 000');  
        
            isVali &= validator.kiemTraRong(chucVu, 'tbChucVu', '(*) Chức Vụ không được rỗng')
                && validator.chonChucVu(chucVu, 'tbChucVu', '(*) vui lòng chọn chức vụ');  
            isVali &= validator.kiemTraRong(gioLam, 'tbGiolam', '(*) Giờ làm không được rỗng')
                && validator.kiemTraGioLam(gioLam, 'tbGiolam', '(*) Số giờ làm trong tháng 80 - 200 giờ');  
            if(!isVali){
                return;
            }
            var updateNV = new NhanVien(taiKhoanNV,tenNV,emailNV,ngayLam,luongCoBan,chucVu,gioLam,passWord);
            dsnv.arr[x] =updateNV;
            inDsnv(dsnv.arr);
            setLocal(dsnv.arr);
        }        
    )
 }

 // function tìm nhân viên
 btnTimNV.addEventListener('click', function() {
     var newArr = [];        
     var output =  dsnv.arr.filter(x => x.xepLoai.toUpperCase() ==getElm('searchName').value.toUpperCase());
        for(var i=0;i<dsnv.arr.length;i++){
            // console.log(output[i]);      
            if(output[i]!=undefined){
                newArr.push(output[i]);   
            }
        }
        // console.log(newArr);
        dsnv.arr = newArr;
        inDsnv(dsnv.arr);
    
 })

 




