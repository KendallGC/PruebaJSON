

    function iniciar(){
        
        var info = '{ "data" : [{"name": "Nickole Beatrice Smith", "address": "398 Pleasant Pine Cir. Harrington, DE 19123","email": "nicobes@gmail.com","age": 45,"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ","phoneNumbers": [{"phone": "(302) 792-8434"},{"phone": "(302) 792-1134"},{"phone": "(302) 792-2234"},{"phone": "(302) 792-3334"}],"relatives": [{"name": "Susan M Smith"},{"name": "Malcolm W Smith"},{}]},' +
        '{"name": "Jacke Melyn Postre","address": "128 Pleasant Pine Cir. Harrington, DE 48402","email": "jackpost@gmail.com","age": 23,"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ","phoneNumbers": [ {"phone": "(512) 842-2124"}],"relatives": [{"name": "Jay M Postre"},{"name": "May W Postre"}]},'+
        '{"name": "Louis K Patterson","address": "333 Pleasant Pine Cir. Harrington, DE 11111","email": "lpatterson@gmail.com","age": 31,"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ","phoneNumbers": [],"relatives": [{"name": "Jay M Postre"},{"name": "May W Postre"},{}]},'+
        '{"name": "Mickey K Mouse","address": "443 Pleasant Pine Cir. Harrington, DE 12211","email": "mmouse@gmail.com","age": 21,"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ","phoneNumbers": [{"phone": "(444) 792-8434"},{"phone": "(555) 792-1134"}],"relatives": []},'+
        '{"name": "Allan K Moury","address": "312 Pleasant Pine Cir. Harrington, DE 11113","email": "amoury@gmail.com","age": 27,"notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ","phoneNumbers": [],"relatives": []}'+
        ']}';

        console.log(JSON.parse(info));
        
        var correo = document.getElementById("getCorreo").value;

        var nombre, direccion,email,telefono1,telefono2,telefono3,telefono4,
        relative1,relative2;


        
        if(JSON.parse(info).data[0].email == correo){
         nombre = JSON.parse(info).data[0].name;
         direccion = JSON.parse(info).data[0].address;
         email = correo;
         telefono1 = JSON.parse(info).data[0].phoneNumbers[0].phone;
         telefono2 = JSON.parse(info).data[0].phoneNumbers[1].phone;
         telefono3 = JSON.parse(info).data[0].phoneNumbers[2].phone;
         telefono4 = JSON.parse(info).data[0].phoneNumbers[3].phone;
         relative = JSON.parse(info).data[0].relatives[0].name;
         relative2 = JSON.parse(info).data[0].relatives[1].name;
        console.log(nombre,direccion,email,telefono1,telefono2,telefono3,telefono4,relative, relative2);
        setTimeout("location.href='resultado.html'", 300);



        }
        else if(JSON.parse(info).data[1].email == correo){
         nombre = JSON.parse(info).data[1].name;
         direccion = JSON.parse(info).data[1].address;
         email = correo;
         telefono1 = JSON.parse(info).data[1].phoneNumbers[0].phone;
         relative = JSON.parse(info).data[1].relatives[0].name;
         relative2 = JSON.parse(info).data[1].relatives[1].name;
        console.log(nombre,direccion,email,telefono1,relative);
        setTimeout("location.href='resultado.html'", 300);
        }
        else if(JSON.parse(info).data[2].email == correo){
            nombre = JSON.parse(info).data[2].name;
            direccion = JSON.parse(info).data[2].address;
            email = correo; 
            relative = JSON.parse(info).data[2].relatives[0].name;
            relative2 = JSON.parse(info).data[2].relatives[1].name;
           console.log(nombre,direccion,email,relative1,relative2);
           setTimeout("location.href='resultado.html'", 300);
        
        }
        else if(JSON.parse(info).data[3].email == correo){
         nombre = JSON.parse(info).data[3].name;
         direccion = JSON.parse(info).data[3].address;
         email = correo;
         telefono1 = JSON.parse(info).data[3].phoneNumbers[0].phone;
         telefono2 = JSON.parse(info).data[3].phoneNumbers[1].phone;
        console.log(nombre,direccion,email,telefono1,telefono2);  
        setTimeout("location.href='resultado.html'", 300);  
        }
        else if(JSON.parse(info).data[4].email == correo){
         nombre = JSON.parse(info).data[4].name;
         direccion = JSON.parse(info).data[4].address;
         email = correo;
        console.log(nombre,direccion,email);
        setTimeout("location.href='resultado.html'", 300);
        }

       else{
    console.log("No existe persona con ese correo");
  }


    }





   

        





