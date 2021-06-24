function Validator(){
    this.kiemTraRong = function(value,spanId,mess){
        if(!value){
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;
        } else{
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;
        }
    } 

    this.kiemTraDoDai = function(value,spanId,mess) {
        if(value.length >=4 && value.length <= 6){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else {
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;    
        }
    }

    this.kiemTraKiTu = (value,spanId,mess) =>{
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if(pattern.test(value)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }
    }

    this.kiemTraEmail =(value,spanId,mess)=>{
        var pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
        if(pattern.test(value)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }
    }

    this.kiemTraPassword =(value,spanId,mess)=>{
     
                    var lowerCaseLetters = /[a-z]/g;
                    var upperCaseLetters = /[A-Z]/g;
                    var numbers = /[0-9]/g;
   
        if(value.match(lowerCaseLetters)&&value.match(upperCaseLetters)&&value.match(numbers)&&(value.length >= 8 && value.length <= 16)){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
            return true;  
        }   else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;  
        }    
    }

    this.kiemTraNgayLam = (value,spanId,mess)=>{
        var reg =  /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(reg)) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }    
    }

    this.kiemTraLuong = (value,spanId,mess) => {
        if (value>=1000000 && value<=20000000) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }  
    }

    this.chonChucVu = (value,spanId,mess)=>{
        if(value ==="Sếp" || value === "Trưởng phòng" || value ==="Nhân viên"){
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true; 
        } else{
            getElm(spanId).style.display = 'block';
            getElm(spanId).innerHTML =mess;
            return false;
        }
    }
    
    this.kiemTraGioLam = (value,spanId,mess) => {
        if (value>=80 && value<=200) {
            getElm(spanId).style.display = 'none';
            getElm(spanId).innerHTML ='';
          return true;
        }
        else {
          getElm(spanId).style.display = 'block';
          getElm(spanId).innerHTML =mess;
          return false;
        }  
    }

                
}