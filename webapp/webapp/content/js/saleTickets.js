(function () {
    'use strict';
    $(function () {
        var form = layui.form;
        var ticketData = null;
        $.get('data.json',function(res){
            console.log(res);
            ticketData = res;
            var singleTicket = res.singleTicketList||[];
            var mutiTicket = res.combinationTicketList||[];
            
            $('#single_ticket').append(setTicketData(singleTicket,true));
            $('#muti_ticket').append(setTicketData(mutiTicket,false));
        });
        //表格
        var data = { Rows: [{ "ProductID": 1, "ProductName": "Chai", "SupplierID": 1, "CategoryID": 1, "QuantityPerUnit": "10 boxes x 20 bags", "UnitPrice": 18, "UnitsInStock": 39, "UnitsOnOrder": 0, "ReorderLevel": 10, "Discontinued": false, "EAN13": "070684900001" }, { "ProductID": 2, "ProductName": "Chang", "SupplierID": 1, "CategoryID": 1, "QuantityPerUnit": "24 - 12 oz bottles", "UnitPrice": 19, "UnitsInStock": 17, "UnitsOnOrder": 40, "ReorderLevel": 25, "Discontinued": false, "EAN13": "070684900002" }, { "ProductID": 3, "ProductName": "Aniseed Syrup", "SupplierID": 1, "CategoryID": 2, "QuantityPerUnit": "12 - 550 ml bottles", "UnitPrice": 10, "UnitsInStock": 13, "UnitsOnOrder": 70, "ReorderLevel": 25, "Discontinued": false, "EAN13": "070684900003" }, { "ProductID": 4, "ProductName": "Chef Anton's Cajun Seasoning", "SupplierID": 2, "CategoryID": 2, "QuantityPerUnit": "48 - 6 oz jars", "UnitPrice": 22, "UnitsInStock": 53, "UnitsOnOrder": 0, "ReorderLevel": 0, "Discontinued": false, "EAN13": "070684900004" }, { "ProductID": 5, "ProductName": "Chef Anton's Gumbo Mix", "SupplierID": 2, "CategoryID": 2, "QuantityPerUnit": "36 boxes", "UnitPrice": 21.35, "UnitsInStock": 0, "UnitsOnOrder": 0, "ReorderLevel": 0, "Discontinued": true, "EAN13": "070684900005" }, { "ProductID": 6, "ProductName": "Grandma's Boysenberry Spread", "SupplierID": 3, "CategoryID": 2, "QuantityPerUnit": "12 - 8 oz jars", "UnitPrice": 25, "UnitsInStock": 120, "UnitsOnOrder": 0, "ReorderLevel": 25, "Discontinued": false, "EAN13": "070684900006" }, { "ProductID": 7, "ProductName": "Uncle Bob's Organic Dried Pears", "SupplierID": 3, "CategoryID": 7, "QuantityPerUnit": "12 - 1 lb pkgs.", "UnitPrice": 30, "UnitsInStock": 15, "UnitsOnOrder": 0, "ReorderLevel": 10, "Discontinued": false, "EAN13": "070684900007" }, { "ProductID": 8, "ProductName": "Northwoods Cranberry Sauce", "SupplierID": 3, "CategoryID": 2, "QuantityPerUnit": "12 - 12 oz jars", "UnitPrice": 40, "UnitsInStock": 6, "UnitsOnOrder": 0, "ReorderLevel": 0, "Discontinued": false, "EAN13": "070684900008" }, { "ProductID": 9, "ProductName": "Mishi Kobe Niku", "SupplierID": 4, "CategoryID": 6, "QuantityPerUnit": "18 - 500 g pkgs.", "UnitPrice": 97, "UnitsInStock": 29, "UnitsOnOrder": 0, "ReorderLevel": 0, "Discontinued": true, "EAN13": "070684900009" }, { "ProductID": 10, "ProductName": "Ikura", "SupplierID": 4, "CategoryID": 8, "QuantityPerUnit": "12 - 200 ml jars", "UnitPrice": 31, "UnitsInStock": 31, "UnitsOnOrder": 0, "ReorderLevel": 0, "Discontinued": false, "EAN13": "070684900010" }], Total: 77 };
      
        $(document).keydown(function(e){
            if (e.keyCode == 112||e.keyCode == 113||e.keyCode == 114||e.keyCode == 115
               ||e.keyCode == 116||e.keyCode == 117||e.keyCode == 118||e.keyCode == 119||e.keyCode == 120
               ||e.keyCode==121||e.keyCode==122||e.keyCode == 123) {
                var code = getKeyCode(e.keyCode);
                $('.ticket-keycode').each(function(){
                    if($.trim($(this).text())===code)
                    {
                        selectTicket('isCheck',$(this).parent().parent(),addCart);
                    }
                });
                e.keyCode = 0;
                // event.preventDefault();
                //event.returnValue=false;
                return false;
            }
            window.onhelp = function () { return false };//ie下面不能屏蔽f1键的补充方法,和上面的一行的效果是一样的
        });

       var cart =  $("#cart-table").ligerGrid({
            columns: [
                {
                    display: '票名称', name: 'ticketName', type: 'int', align: 'center',frozen:true 
                },
                { display: '景点名称', name: 'spotName', align: 'center', width: 200 },
                {
                    display: '单价', name: 'ticketSalePrice', align: 'center', type: 'float', width: 100,
                    totalSummary:
                    {
                            render: function (suminf, column, cell) {
                                return '<div>合计</div>'
                            }
                    }
                },
                {
                    display: '数量', name: 'ticketNum', align: 'center', editor: { type: 'int' }, width: 100,
                    totalSummary:
                        {
                            render: function (suminf, column, cell) {
                                return '<div>' + suminf.sum + '</div>'
                            }
                        }
                },
                {
                    display: '小计', name: 'totalPrice', align: 'center', type: 'currency', width: 150,
                    render:function(item, record, rowindex, value, column){
                        console.log(item);
                        return '<span class="cellTotalPrice">'+(item.ticketSalePrice*item.ticketNum).toFixed(2)+'</span>'
                    },
                    totalSummary:
                        {
                            render: function (suminf, column, cell) {
                                var sum = 0;
                                $('.cellTotalPrice').each(function(){
                                    sum+=parseFloat($(this).text());
                                });
                                return '<div id="total">' + sum.toFixed(2) + '</div>'
                            }
                        }
                },
                {
                    display: '游览日期', name: 'travelDate', align: 'center', type: 'date', editor: { type: 'date' }
                },
                {
                    display: '姓名', name: 'customerName', align: 'center', type: 'text', editor: { type: 'text' }
                },
                {
                    display: '身份证号', name: 'customerID', align: 'center', type: 'float', editor: { type: 'int' }
                },
                {
                    display: '操作', name: '', align: 'center', type: 'float', width: 100,
                    render: function (item, record, rowindex, value, column) {
                        return '<a href="javascript:void(0)"  class="fc-bluish-green" id="delRow" data-id='+record+'>删除</a>'
                    }
                }
            ], isScroll: true, data:[], sortName: 'ProductID', width: '100%', alternatingRow: false, enabledEdit: true, rownumbers: true, usePager: false, height: 250,
            onAfterEdit:onAfterEdit
        });
        
        $(document).on('click','#delRow',function(){
            var id = $(this).attr('data-id');
            cart.deleteRow(id);
        });
        function onAfterEdit(e){
            cart.updateCell('totalPrice',(e.record.ticketNum*e.record.ticketSalePrice).toFixed(2),e.record);
            var sum = 0;
            $('.cellTotalPrice').each(function(){
                sum+=parseFloat($(this).text());
            });
            $('#total').html(sum.toFixed(2));
        }
     
        //删除行操作
        function delRow(rowidx){
           // cart.deleteRow(rowidx);
            console.log(rowidx);
        }
        //减法操作
        $('#minus').click(function () {
            var val = $('.inputNum').val();
            if (val < 2)
                return;
            else
                val--;
            $('.inputNum').val(val);
        });
        //加法操作
        $('#plus').click(function () {
            var val = $('.inputNum').val();
            val++;
            $('.inputNum').val(val);
        });

        //每次键盘输入时检查是否为数字
        $('.inputNum').keyup(function () {
            var val = $(this).val();
            if (isNaN(val) || $.trim(val) == '' || val == null) {
                $(this).val('1');
            }
        });
        //添加选中效果
        $('.ticket-pay').click(function () {
            var self = this;
            $(self).parent().siblings().find('.ticket-pay-checked').remove();
            $(self).after('<p class="ticket-pay-checked">&nbsp;</p>');
        });
        //付款方式移除选中效果
        $(document).on('click', '.ticket-pay-checked', function () {
            $(this).remove();
        });
        //单票选择
        $(document).on('click','.single-ticket .ticket-thumbnail',function(){
            selectTicket('isCheck', $(this),addCart);
        });
        //多票选择
        $(document).on('click','.multi-ticket .ticket-thumbnail',function(){
            selectTicket('isCheck', $(this),addCart);
        });
        //清空购物车
        $('#clearCart').click(function(){
            clearCart(cart);
        });
        //点选门票操作方法
        /**
         *
         *
         * @param {多选的checkbox} checkbox
         * @param {当前元素} elem
         * @param {是否为联票} isMulti 
         */
        function selectTicket(checkbox,elem,func,drpitemId) {
            var ele = elem||$('.ticket-thumbnail');
          //  var flag = $('.ticket-thumbnail').parent().parent().parent().hasClass('single-ticket');
            ele.toggleClass('selected')//选中背景色
            if ($('#' + checkbox).is(":checked")) {
                return;
            }
            else {
               
                ele.parent().siblings().find('.ticket-thumbnail').removeClass('selected');
                var id = elem==null?drpitemId:(ele.parent().attr('data-id'));//每张票的id
                if(!ele.hasClass('selected'))
                   {
                    if(elem==null)
                     func(ticketData,id,cart);//调用添加购物车方法 
                    else
                     return
                   }
                else
                    func(ticketData,id,cart);//调用添加购物车方法 
            }
        }
        //清空购物车方法
        function clearCart(table){
            var data = {};
            table.loadData(data);
        }
         //添加购物车方法
         function addCart(ticketInfo,ticketId,table){
            var node = [];
            var itemNum = parseInt($(".inputNum").val()); 
            var date = new Date()
            var year = date.getFullYear();
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var formatDate = year+'-'+month+'-'+day;
            var obj = {};
            for (var key in ticketInfo) {
                var idx = key;
                var arr = ticketInfo[idx];
                $.each(arr,function(index,value){
                    if(value.ticketId==ticketId)
                    {
                        obj.ticketId = value.ticketId;
                        obj.ticketName = value.ticketName;
                        obj.spotName = value.spotName;
                        obj.ticketSalePrice= parseFloat(value.ticketSalePrice).toFixed(2);
                        obj.ticketNum = itemNum;
                        obj.travelDate = formatDate;
                        obj.customerName = '';
                        obj.customerID = "";
                    }
                });
                table.appendRow(obj);
            }
            //return obj;
        }
        function setTicketData(arr,dropdown) {
            var str = "";
            var obj = handleData(arr);
            console.log(obj);
            $(obj.ticketCard).each(function (i) {
                str += '<div class="layui-input-inline" data-id="' + obj.ticketCard[i].ticketId + '">' +
                    '<div class="ticket-thumbnail">' +
                    '<p class="ticket-title">' + obj.ticketCard[i].ticketName + '</p>' +
                    '<p class="ticket-price">' +
                    '<span class="warning-color">￥</span><span class="warning-color">' + obj.ticketCard[i].ticketSalePrice + '</span>' + '<span> &nbsp;&nbsp;（</span><span class="ticket-keycode"> ' + obj.ticketCard[i].shortcutKey + ' </span> ）' +
                    '</p>' + '</div>' + '</div>';
            });
            if (dropdown) {
                //单票下拉
                $('#selectSingleTicket').selectPage({
                    showField: 'ticketName',
                    keyField: 'ticketId',
                    data: obj.ticketDrp||[],
                    //启用多选模式
                    multiple: false,
                    pagination: false,
                    listSize: 5,
                    multipleControlbar: false,
                    eSelect:function(data){
                        console.log(data);
                        selectTicket('isCheck',null,addCart,data.ticketId);
                    }
                });
            } else {
                //联票下拉
                $('#selectMutiTicket').selectPage({
                    showField: 'ticketName',
                    keyField: 'ticketId',
                    data: obj.ticketDrp||[],
                    multiple: false,
                    pagination: false,
                    listSize: 5,
                    multipleControlbar: false,
                    lang: 'cn',
                    eSelect:function(data){
                        console.log(data);
                        selectTicket('isCheck',null,addCart,data.ticketId);
                    }
                });
            }
            $('.sp_result_area').width( $('.sp_container').width());
            return str;
        }

        //处理ajax 请求相应数据
        function handleData(data){
            var showData = {
                ticketCard:[],
                ticketDrp:[]
            }
            var len = data.length;
            if(len>5)
            {
                var i = 0;
               while(i<5)
                {
                    showData.ticketCard.push(data[i]);
                    i++;
                }
                while(len>5){
                    showData.ticketDrp.push(data[len-1]);
                    len--;
                }
                
            }
            else
            {
                showData.ticketCard = data;
            }

            return showData;
        }
        //keycode 转对应字符串
        function getKeyCode(keycode){
            var f = null;
            switch(keycode){
                case 112:
                f= 'F1';
                break;
                case 113:
                f = 'F2';
                break;
                case 114:
                f = 'F3';
                break;
                case 115:
                f = 'F4';
                break;
                case 116:
                f = 'F5';
                break;
                case 117:
                f= 'F6';
                break;
                case 118:
                f = 'F7';
                break;
                case 119:
                f = 'F8';
                break;
                case 120:
                f = 'F9';
                break;
                case 121:
                f = 'F10';
                break;
                case 122:
                f = 'F11';
                break;
                case 123:
                f = 'F12';
                break;
            }
            return f;
        }
        //表单提交
        form.on('submit', function () {
            $('.ticket-pay-checked').each(function (e) {
                console.log($(this).prev().attr('data-value'));
            });
            return false;
        });

        $('#companyName').selectPage({
            showField: 'QuantityPerUnit',
            keyField: 'ProductID',
            data: data.Rows||[],
            //启用多选模式
            multiple: false,
            pagination:false,
            listSize:5,
            multipleControlbar:false
        });

        $('#checkout').keyup(function(){
            var val = $(this).val();
            if (isNaN(val) || $.trim(val) == '' || val == null) {
                $(this).val('');
            }
        });
        
        $('#province').selectPage({
            showField: 'QuantityPerUnit',
            keyField: 'ProductID',
            data: data.Rows||[],
            //启用多选模式
            multiple: false,
            pagination:false,
            listSize:5,
            multipleControlbar:false
        });

        $('#city').selectPage({
            showField: 'QuantityPerUnit',
            keyField: 'ProductID',
            data: data.Rows||[],
            //启用多选模式
            multiple: false,
            pagination:false,
            listSize:5,
            multipleControlbar:false
        });

        $('#district').selectPage({
            showField: 'QuantityPerUnit',
            keyField: 'ProductID',
            data: data.Rows||[],
            //启用多选模式
            multiple: false,
            pagination:false,
            listSize:5,
            multipleControlbar:false
        });
        form.on('radio',function(data){
            if(data.value)
            {
                
            }
        });

    });
})();