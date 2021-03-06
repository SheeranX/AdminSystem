(function () {
    'use strict'
    $("#addNewClient").click(function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            parent.layer.open({
                type: 2,
                // 客户管理添加
                // content:["../../views/ticketSaleOperation/popup/clientManageAdd.html",'yes'],
                // title:'<img src="../../common/images/icon_edit.png">'+'客户管理添加',
                // area: ['400px', '450px'],
                // skin:'clientManageAdd-popup'

                //添加导游信息
                // content:["../../views/ticketSaleOperation/popup/guideManageAdd.html",'no'],
                // title:'<img src="../../common/images/icon_edit.png">'+'导游信息',
                // area: ['400px', '550px'],
                // skin:'clientManageAdd-tourst'


                //客户账户
                // content:["../../views/ticketSaleOperation/popup/accountRecharge.html",'yes'],
                // title:'<img src="../../common/images//icon_edit.png">'+'客户账户',
                // area: ['400px', '450px'],
                // skin:'client-account'

                //客户添加
                content: ["../../views/ticketSaleOperation/popup/clientAdd.html", 'yes'],
                title: '<img src="../../common/images/icon_edit.png">' + '客户账户',
                resize:false,
                area: ['900px', '600px']
            });
        });
    });

    layui.use('form', function () {
        // content:["../../views/ticketSaleOperation/popup/clientAdd.html",'yes'],
        // title:'<img src="../../common/images//icon_edit.png">'+'客户账户',
        // area: ['900px', '600px']
    });



layui.use('form', function () {
    var form = layui.form;
    form.on('submit', function (data) {
        console.log(data.elem)
        console.log(data.form)
        console.log(data.field)
        return false;
    });
});

// 
$(function () {
    var g;
    var CustomersData =
        { Rows: [{ "CustomerID": "ALFKI", "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Region": null, "PostalCode": "12209", "Country": "Germany", "Phone": "030-0074321", "Fax": "030-0076545" }, { "CustomerID": "ANATR", "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitución 2222", "City": "México D.F.", "Region": null, "PostalCode": "05021", "Country": "Mexico", "Phone": "(5) 555-4729", "Fax": "(5) 555-3745" }, { "CustomerID": "ANTON", "CompanyName": "Antonio Moreno Taquería", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos  2312", "City": "México D.F.", "Region": null, "PostalCode": "05023", "Country": "Mexico", "Phone": "(5) 555-3932", "Fax": null }, { "CustomerID": "AROUT", "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Region": null, "PostalCode": "WA1 1DP", "Country": "UK", "Phone": "(171) 555-7788", "Fax": "(171) 555-6750" }, { "CustomerID": "BERGS", "CompanyName": "Berglunds snabbköp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvägen  8", "City": "Luleå", "Region": null, "PostalCode": "S-958 22", "Country": "Sweden", "Phone": "0921-12 34 65", "Fax": "0921-12 34 67" }, { "CustomerID": "BLAUS", "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Region": null, "PostalCode": "68306", "Country": "Germany", "Phone": "0621-08460", "Fax": "0621-08924" }, { "CustomerID": "BLONP", "CompanyName": "Blondel père et fils", "ContactName": "Frédérique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Kléber", "City": "Strasbourg", "Region": null, "PostalCode": "67000", "Country": "France", "Phone": "88.60.15.31", "Fax": "88.60.15.32" }, { "CustomerID": "BOLID", "CompanyName": "Bólido Comidas preparadas", "ContactName": "Martín Sommer", "ContactTitle": "Owner", "Address": "C/ Araquil, 67", "City": "Madrid", "Region": null, "PostalCode": "28023", "Country": "Spain", "Phone": "(91) 555 22 82", "Fax": "(91) 555 91 99" }, { "CustomerID": "BONAP", "CompanyName": "Bon app'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Region": null, "PostalCode": "13008", "Country": "France", "Phone": "91.24.45.40", "Fax": "91.24.45.41" }, { "CustomerID": "BOTTM", "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawwassen", "Region": "BC", "PostalCode": "T2F 8M4", "Country": "Canada", "Phone": "(604) 555-4729", "Fax": "(604) 555-3745" }, { "CustomerID": "BSBEV", "CompanyName": "B's Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Region": null, "PostalCode": "EC2 5NT", "Country": "UK", "Phone": "(171) 555-1212", "Fax": null }, { "CustomerID": "CACTU", "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Region": null, "PostalCode": "1010", "Country": "Argentina", "Phone": "(1) 135-5555", "Fax": "(1) 135-4892" }, { "CustomerID": "CENTC", "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "México D.F.", "Region": null, "PostalCode": "05022", "Country": "Mexico", "Phone": "(5) 555-3392", "Fax": "(5) 555-7293" }, { "CustomerID": "CHOPS", "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Region": null, "PostalCode": "3012", "Country": "Switzerland", "Phone": "0452-076545", "Fax": null }, { "CustomerID": "COMMI", "CompanyName": "Comércio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusíadas, 23", "City": "São Paulo", "Region": "SP", "PostalCode": "05432-043", "Country": "Brazil", "Phone": "(11) 555-7647", "Fax": null }, { "CustomerID": "CONSH", "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens\r\n12  Brewery ", "City": "London", "Region": null, "PostalCode": "WX1 6LT", "Country": "UK", "Phone": "(171) 555-2282", "Fax": "(171) 555-9199" }, { "CustomerID": "DRACD", "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Region": null, "PostalCode": "52066", "Country": "Germany", "Phone": "0241-039123", "Fax": "0241-059428" }, { "CustomerID": "DUMON", "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Region": null, "PostalCode": "44000", "Country": "France", "Phone": "40.67.88.88", "Fax": "40.67.89.89" }, { "CustomerID": "EASTC", "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Region": null, "PostalCode": "WX3 6FW", "Country": "UK", "Phone": "(171) 555-0297", "Fax": "(171) 555-3373" }, { "CustomerID": "ERNSH", "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Region": null, "PostalCode": "8010", "Country": "Austria", "Phone": "7675-3425", "Fax": "7675-3426" }, { "CustomerID": "FAMIA", "CompanyName": "Familia Arquibaldo", "ContactName": "Aria Cruz", "ContactTitle": "Marketing Assistant", "Address": "Rua Orós, 92", "City": "São Paulo", "Region": "SP", "PostalCode": "05442-030", "Country": "Brazil", "Phone": "(11) 555-9857", "Fax": null }, { "CustomerID": "FISSA", "CompanyName": "FISSA Fabrica Inter. Salchichas S.A.", "ContactName": "Diego Roel", "ContactTitle": "Accounting Manager", "Address": "C/ Moralzarzal, 86", "City": "Madrid", "Region": null, "PostalCode": "28034", "Country": "Spain", "Phone": "(91) 555 94 44", "Fax": "(91) 555 55 93" }, { "CustomerID": "FOLIG", "CompanyName": "Folies gourmandes", "ContactName": "Martine Rancé", "ContactTitle": "Assistant Sales Agent", "Address": "184, chaussée de Tournai", "City": "Lille", "Region": null, "PostalCode": "59000", "Country": "France", "Phone": "20.16.10.16", "Fax": "20.16.10.17" }, { "CustomerID": "FOLKO", "CompanyName": "Folk och fä HB", "ContactName": "Maria Larsson", "ContactTitle": "Owner", "Address": "Åkergatan 24", "City": "Bräcke", "Region": null, "PostalCode": "S-844 67", "Country": "Sweden", "Phone": "0695-34 67 21", "Fax": null }, { "CustomerID": "FRANK", "CompanyName": "Frankenversand", "ContactName": "Peter Franken", "ContactTitle": "Marketing Manager", "Address": "Berliner Platz 43", "City": "München", "Region": null, "PostalCode": "80805", "Country": "Germany", "Phone": "089-0877310", "Fax": "089-0877451" }, { "CustomerID": "FRANR", "CompanyName": "France restauration", "ContactName": "Carine Schmitt", "ContactTitle": "Marketing Manager", "Address": "54, rue Royale", "City": "Nantes", "Region": null, "PostalCode": "44000", "Country": "France", "Phone": "40.32.21.21", "Fax": "40.32.21.20" }, { "CustomerID": "FRANS", "CompanyName": "Franchi S.p.A.", "ContactName": "Paolo Accorti", "ContactTitle": "Sales Representative", "Address": "Via Monte Bianco 34", "City": "Torino", "Region": null, "PostalCode": "10100", "Country": "Italy", "Phone": "011-4988260", "Fax": "011-4988261" }, { "CustomerID": "FURIB", "CompanyName": "Furia Bacalhau e Frutos do Mar", "ContactName": "Lino Rodriguez ", "ContactTitle": "Sales Manager", "Address": "Jardim das rosas n. 32", "City": "Lisboa", "Region": null, "PostalCode": "1675", "Country": "Portugal", "Phone": "(1) 354-2534", "Fax": "(1) 354-2535" }, { "CustomerID": "GALED", "CompanyName": "Galería del gastrónomo", "ContactName": "Eduardo Saavedra", "ContactTitle": "Marketing Manager", "Address": "Rambla de Cataluña, 23", "City": "Barcelona", "Region": null, "PostalCode": "08022", "Country": "Spain", "Phone": "(93) 203 4560", "Fax": "(93) 203 4561" }, { "CustomerID": "GODOS", "CompanyName": "Godos Cocina Típica", "ContactName": "José Pedro Freyre", "ContactTitle": "Sales Manager", "Address": "C/ Romero, 33", "City": "Sevilla", "Region": null, "PostalCode": "41101", "Country": "Spain", "Phone": "(95) 555 82 82", "Fax": null }], Total: 91 };
    var tableH = $('body').height() - 125;
    createTable(tableH);

    $(window).resize(function () {
        $(".popupover>.arrow").css('margin-left', $('#showMore').offset().left + 10);
        tableH = $('body').height() - 125;
        createTable(tableH);
    });
    var popupoverH = 0;
    $("#showMore").click(function () {
        if ($('.popupover').css('display') == 'none') {
            var h = tableH - ($('.popupover').height() + 20);
            createTable(h);
        }
        else {
            createTable(tableH);
        }
        $(".popupover").slideToggle(500);
        $(".popupover>.arrow").css('margin-left', $(this).offset().left + 10);
        if (!$(this).children().hasClass('show-more-click')) {
            $('.show-more').addClass('show-more-click');
        }
        else {
            $(this).children().removeClass('show-more-click');
        }
    });
    function createTable(a) {
        g = $("#maingrid").ligerGrid({
            columns: [
                { display: 'ID', name: 'CustomerID', align: 'center', width: 120},
                { display: 'NAME', name: 'CompanyName', minWidth: 60, },
                { display: 'GENDE R', name: 'ContactName', width: 100, align: 'center', },
                { display: 'SCHOOL', name: 'ContactName', width: 200, align: 'center', },
                { display: 'TEACHER', name: 'ContactName', width: 200, align: 'center', },
                { display: 'MUSIC', name: 'ContactName', width: 200, align: 'center', },
                { display: 'MOVIES', name: 'City', width: 200 }
            ], data: CustomersData, pageSize: 20, sortName: 'CustomerID',
            width: '100%', height: a, checkbox: true, rownumbers: true, inWindow: true,
            fixedCellHeight: false, alternatingRow: false, enabledEdit: true
        });
    }

    var selectedData = ['ALFKI','ANATR'];
    var formatData = function(e,eID,eName){
        var arr = [];
         for(var i = 0;i<e.length;i++)
         {
            var obj = {};
            obj.disabled = false;
            obj.groupName = "";
            obj.groupId = 0;
            obj.selected = false;
            for(var j = 0;j<selectedData.length;j++){
                if(selectedData[j]==e[i][eID])
                {
                    obj.selected = true;
                    break;
                }
                 else
                     obj.selected = false;
            }
            obj.id = e[i][eID];
            obj.name = e[i][eName];
            arr.push(obj);
         }
         console.log(arr);
          return arr;
      }
      
      $('.dropdown-mul-1').dropdown({
        data: formatData(CustomersData.Rows,'CustomerID','CompanyName'),
        limitCount: 40,
        multipleMode: 'label',
        isSingleSelect:true,
        choice: function() {
          console.log(arguments, this);
        }
      });

      $('#selectPageSelectOnly').selectPage({
        showField : 'City',
        keyField : 'CustomerID', 
        data : CustomersData.Rows,
        //仅选择模式，不允许输入查询关键字
        selectOnly : true,
        //关闭分页栏，数据将会一次性在列表中展示，上限200个项目
        pagination : false,
        //关闭分页的状态下，列表显示的项目个数，其它的项目以滚动条滚动方式展现（默认10个）
        listSize : 15,
        multiple : true
    });

    $('#selectPageSelectOnly1').selectPage({
        showField : 'City',
        keyField : 'CustomerID',
        data : CustomersData.Rows,
        //多查询条件之间的“与”“或”关系
        andOr : 'OR',
        //设置结果集排序，若只指定字段，不指定排序方式，则默认使用asc升序模式
        //排序字段若不指定，则默认对showField指定的列进行升序排列
        //若需要多字段排序，则设置['id desc','name']
        //当前案例设置了使用id字段的内容进行降序排序
        orderBy : ['CustomerID desc']
    });

    $('#selectPageSelectOnly2').selectPage({
        showField : 'City',
        keyField : 'CustomerID',
        data : CustomersData.Rows,
        //设置每页显示记录数
        pageSize : 5,
        //关闭向下的三角尖按钮
        dropButton : false,
        //格式化显示项目，提供源数据进行使用
        formatItem : function(data){
            return data.Address + '(' + data.CompanyName + ')';
        }
    });

    $('#selectPageSelectOnly3').selectPage({
        showField : 'City',
        keyField : 'CustomerID',
        data : CustomersData.Rows,
        //启用多选模式
        multiple : true
    });

    $('#selectPageSelectOnly4').selectPage({
        showField : 'City',
        keyField : 'CustomerID',
        data : CustomersData.Rows,
        //启用多选模式
        multiple : true,
        //限制最多选中三个项目
        maxSelectLimit : 3,
        //设置选中项目后不关闭列表
        selectToCloseList : false
    });

    $('#selectPageSelectOnly5').selectPage({
        showField : 'City',
        keyField : 'CustomerID',
        data : CustomersData.Rows,
        //启用多选模式
        multiple : true,
        //限制最多选中三个项目
        maxSelectLimit : 3,
        //设置选中项目后不关闭列表  
        selectToCloseList : false
    });


})
}) ();