$( () => {
    $('.summary').hide();
    $('.delivery-data-overlay').hide();
    //Get user inputs
    $("#checkout").click( () => {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };