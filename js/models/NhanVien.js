function NhanVien(_taiKhoanNV,_hoTen,_email,_ngayLam,_luongCoBan,_chucVu,_gioLamTrongThang,_password){
    this.taiKhoanNV = _taiKhoanNV;
    this.hoTen = _hoTen;
    this.email = _email;    
    this.password= _password;
    this.ngayLam = _ngayLam;  
    this.luongCoBan= _luongCoBan; 
    this.chucVu = _chucVu;
    this.gioLamTrongThang =_gioLamTrongThang;

    this.tinhTongLuong = function(){
       if(this.chucVu ==='Sếp'){
         return this.luongCoBan*3;
       }
       if(this.chucVu ==='Trưởng phòng'){
        return this.luongCoBan*2;
       } 
       if(this.chucVu ==='Nhân viên') {
        return this.luongCoBan;
       }

    };
    this.tongLuong = this.tinhTongLuong();

    this.xepLoaiNV = function(){
        if(this.gioLamTrongThang <160){
            return "nhân viên trung bình";
          }
          if(this.gioLamTrongThang >= 160 &&this.gioLamTrongThang <=176){
           return  'nhân viên khá';
          } 
          if(this.gioLamTrongThang >= 176 &&this.gioLamTrongThang <=192){
           return  'nhân viên giỏi';
          } 
          if(this.gioLamTrongThang >= 192 ){
           return  'nhân viên xuất sắc';
          }         
   
    };
    this.xepLoai = this.xepLoaiNV();

}


