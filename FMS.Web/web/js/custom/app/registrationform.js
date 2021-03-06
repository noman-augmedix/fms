    
    $(document).ready(function() {
        setComboBox();
        $("#txtPerentId").focus();
        $("#txtBirthDate").datepicker({
            dateFormat: "yy-mm-dd"
        }).datepicker("setDate", new Date());
        
    });
    
    function saveDealer()
    {
        if(!isValidDealerRegistrationForm())
        {
            return;
        }
        showDialog();
        var dealerRegistration = new Object();
        //stdTransaction.transactionDate = $("#txtTrnDate").val().trim();
        dealerRegistration.postCode = $("#cmbPostCode").val().trim();
        dealerRegistration.parentId = $("#txtParentId").val().trim();
        dealerRegistration.nationalId = $("#txtNationalId").val().trim();
        dealerRegistration.dealerName = $("#txtDealerName").val().trim();
        dealerRegistration.fatherName = $("#txtFatherName").val().trim();
        dealerRegistration.motherName = $("#txtMotherName").val().trim();
        dealerRegistration.presentAddress = $("#txtPresentAddress").val().trim();
        dealerRegistration.permanentAddress = $("#txtPermanentAddress").val().trim();
        dealerRegistration.mobileNo = $("#txtMobileNo").val().trim();
        dealerRegistration.email = $("#txtEmail").val().trim();
        dealerRegistration.gender = $('input:radio[name=type]:checked').val().trim();
        dealerRegistration.birthDate = $("#txtBirthDate").val().trim();
        dealerRegistration.bloodGroup = $("#txtBloodGroup").val().trim();
        
        var json = $.toJSON(dealerRegistration);
        var value = "actionType=saveDealer&saveDealerJson="+json;
        $.ajax({
            cache     : false,
            type      : "post",
            data      : value,
            url       : "registrationservlet.do",
            dataType  : "json",
            success   :	function(res){
                            clearForm();
                            hideDialog();
                            showSuccessMessage('dealer_registration_success');
                            $("#dealerId").text(res.dealerId);
                            $('#basic-modal-content').modal();
                            
                        },
            error     :	function(err){
                            hideDialog();
                            showErrorMessage('dealer_registration_fail');
                        }       
        });
    }
    
    function saveFarmer()
    {
        if(!isValidFarmerRegistrationForm())
        {
            return;
        }
        showDialog();
        var farmerRegistration = new Object();
        //stdTransaction.transactionDate = $("#txtTrnDate").val().trim();
        farmerRegistration.postCode = $("#cmbPostCode").val().trim();
        farmerRegistration.dealerId = $("#txtDealerId").val().trim();
        farmerRegistration.nationalId = $("#txtNationalId").val().trim();
        farmerRegistration.farmerName = $("#txtFarmerName").val().trim();
        farmerRegistration.fatherName = $("#txtFatherName").val().trim();
        farmerRegistration.motherName = $("#txtMotherName").val().trim();
        farmerRegistration.presentAddress = $("#txtPresentAddress").val().trim();
        farmerRegistration.permanentAddress = $("#txtPermanentAddress").val().trim();
        farmerRegistration.mobileNo = $("#txtMobileNo").val().trim();
        farmerRegistration.email = $("#txtEmail").val().trim();
        farmerRegistration.gender = $('input:radio[name=type]:checked').val().trim();
        farmerRegistration.birthDate = $("#txtBirthDate").val().trim();
        farmerRegistration.bloodGroup = $("#txtBloodGroup").val().trim();
        
        var json = $.toJSON(farmerRegistration);
        var value = "actionType=saveFarmer&saveFarmerJson="+json;
        $.ajax({
            cache     : false,
            type      : "post",
            data      : value,
            url       : "registrationservlet.do",
            dataType  : "json",
            success   :	function(res){
                            clearForm();
                            hideDialog();
                            showSuccessMessage('farmer_registration_success');
                            $("#farmerId").text(res.farmerId);
                            $('#basic-modal-content').modal();
                            
                        },
            error     :	function(err){
                            hideDialog();
                            showErrorMessage('farmer_registration_fail');
                        }       
        });
    }
    
    function clearForm()
    {
        /*
        $("#txtParentId").val("");
        $("#txtNationalId").val("");
        $("#txtDealerName").val("");
        $("#txtFatherName").val("");
        $("#txtMotherName").val("");
        $("#txtPresentAddress").val("");
        $("#txtPermanentAddress").val("");
        $("#txtMobileNo").val("");
        $("#txtEmail").val("");
        $('input:radio[name=type]:checked') = false;
        $("#txtBirthDate").val("");
        $("#txtBloodGroup").val("");
        */
       
       $('input[type="text"]').val("");
       $("#txtPresentAddress").val("");
       $("#txtPermanentAddress").val("");
       $("input:radio").attr("checked", false);
    }
    
    function isValidDealerRegistrationForm()
    {
        
        var parentId = $("#txtParentId").val().trim();
        if(parentId.length === 0)
        {
            showErrorMessage('dealer_registration_parent_id_required');
            $("#txtParentId").focus();
            return false;
        }
        
        var nationalId = $("#txtNationalId").val().trim();
        if(nationalId.length === 0)
        {
            showErrorMessage('dealer_registration_national_id_required');
            $("#txtNationalId").focus();
            return false;
        }
        
        var dealerName = $("#txtDealerName").val().trim();
        if(dealerName.length === 0)
        {
            showErrorMessage('dealer_registration_dealer_name_required');
            $("#txtDealerName").focus();
            return false;
        }
        
        return isValidCommonForm();
        
    }
    
    function isValidFarmerRegistrationForm()
    {
        
        var parentId = $("#txtDealerId").val().trim();
        if(parentId.length === 0)
        {
            showErrorMessage('farmer_registration_dealer_id_required');
            $("#txtParentId").focus();
            return false;
        }
        
        var nationalId = $("#txtNationalId").val().trim();
        if(nationalId.length === 0)
        {
            showErrorMessage('dealer_registration_national_id_required');
            $("#txtNationalId").focus();
            return false;
        }
        
        var dealerName = $("#txtFarmerName").val().trim();
        if(dealerName.length === 0)
        {
            showErrorMessage('farmer_registration_farmer_name_required');
            $("#txtDealerName").focus();
            return false;
        }
        
        return isValidCommonForm();
        
    }
    

    function isValidCommonForm(){
        
        var fatherName = $("#txtFatherName").val().trim();
        if(fatherName.length === 0)
        {
            showErrorMessage('dealer_registration_father_name_required');
            $("#txtFatherName").focus();
            return false;
        }
        
        var motherName = $("#txtMotherName").val().trim();
        if(motherName.length === 0)
        {
            showErrorMessage('dealer_registration_mother_name_required');
            $("#txtMotherName").focus();
            return false;
        }
        
        var presentAddress = $("#txtPresentAddress").val().trim();
        if(presentAddress.length === 0)
        {
            showErrorMessage('dealer_registration_present_address_required');
            $("#txtPresentAddress").focus();
            return false;
        }
        
        var permanentAddress = $("#txtPermanentAddress").val().trim();
        if(permanentAddress.length === 0)
        {
            showErrorMessage('dealer_registration_permanent_address_required');
            $("#txtPermanentAddress").focus();
            return false;
        }
        
        var mobileNo = $("#txtMobileNo").val().trim();
        if(mobileNo.length === 0)
        {
            showErrorMessage('dealer_registration_mobile_no_required');
            $("#txtMobileNo").focus();
            return false;
        }
        
        var selectedRadio = $('input:radio[name=type]:checked').val();
        if(selectedRadio == null)
        {
            showErrorMessage('dealer_registration_select_gender_required');
            return false;
        }
        
        var birthDate = $("#txtBirthDate").val().trim();
        if(birthDate.length === 0)
        {
            showErrorMessage('dealer_registration_birth_date_required');
            $("#txtBirthDate").focus();
            return false;
        }
        
        return true;
    }
  
  
    
    function calculateDues()
    {
        var payable = $("#txtPayableAmount").val();
        var paid = $("#txtPaidAmount").val();
        var dues = payable - paid;
        dues = formatNumber(dues, 2);
        $("#txtDueAmount").val(dues);
    }
    
    
    function setComboBox()
    {
        var value = "actionType=getPostCodes";
        $.ajax({
            cache     : false,
            type      : "post",
            data      : value,
            url       : "registrationservlet.do",
            dataType  : "json",
            success   :	function(response){
                
                var html = "";
                var  postCodes= response["postCodeList"];
                alert(postCodes);
                if( postCodes!== null && postCodes.length > 0)
                {
                    for(var i=0;i<postCodes.length;i++)
                    {
                        html += "<option value=\""+postCodes[i]+"\">"+postCodes[i]+"</option>";
                    }
                }
                
                $('#cmbPostCode').append(html);
                $("#cmbPostCode").chosen({"enable_search": true});
            }
            
        });
    }