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
        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 400;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                        case size = "large":
                            price = 1100;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                    }
                    break;
                case flavour = "chickentikka":
                    switch (size) {
                        case size = "regular":
                            price = 400;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "medium":
                            price = 700;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "large":
                            price = 1100;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                    }
                    break;
                case flavour = "periperi":
                    switch (size) {
                        case size = "regular":
                            price = 400;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "medium":
                            price = 700;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "large":
                            price = 1100;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                    }
                    break;
                case flavour = "bbq":
                    switch (size) {
                        case size = "regular":
                            price = 400;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "medium":
                            price = 700;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case size = "large":
                            price = 1100;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 180;
                            } else {
                                totalPrice = (price * number) + 280;
                            }
                            break;
                        case flavour = "hawaiian":
                            switch (size) {
                                case size = "regular":
                                    price = 400;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "medium":
                                    price = 700;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                    price = 1100;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                            }
                            break;
                        case flavour = "mushroom":
                            switch (size) {
                                case size = "regular":
                                    price = 400;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "medium":
                                    price = 700;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                                case size = "large":
                                    price = 1100;
                                    if (crust === "thin") {
                                        totalPrice = (price * number) + 100;
                                    } else if (crust === "thick") {
                                        totalPrice = (price * number) + 150;
                                    } else if (crust === "flatbread") {
                                        totalPrice = (price * number) + 180;
                                    } else {
                                        totalPrice = (price * number) + 280;
                                    }
                                    break;
                            }
                            break;
                        }
                        break;
                }
                switch (topping) {
                    case topping = "tomato":
                        totalPrice = totalPrice + 80;
                        break;
                    case topping = "onions":
                        totalPrice = totalPrice + 80;
                        break;
                    case topping = "mushroom":
                        totalPrice = totalPrice + 80;
                        break;
                    case topping = "pineapple":
                        totalPrice = totalPrice + 120;
                        break;
                    case topping = "sweetcorn":
                        totalPrice = totalPrice + 120;
                        break;
                    case topping = "macon":
                        totalPrice = totalPrice + 120;
                        break;
                    case topping = "mince":
                        totalPrice = totalPrice + 120;
                        break;
                    case topping = "beef":
                        totalPrice = totalPrice + 170;
                        break;
                    case topping = "chicken":
                        totalPrice = totalPrice + 170;
                        break;
                    case topping = "greenpepper":
                        totalPrice = totalPrice + 80;
                        break;
                    case topping = "olives":
                        totalPrice = totalPrice + 120;
                        break;
                }


                //Execute order function
                let newOrder = order(flavour, size, crust, topping, number, totalPrice);
                console.log(newOrder); 

                //Update the order section 
                $('.summary').slideDown(2000);
                $('.delivery-data-overlay').slideUp();
                $('#list').slideDown();
                $('.deliver').show(1000);
                $('.delivernot').show(1000);
                        

                    
                    

        