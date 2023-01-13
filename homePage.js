function onLoadFunctions(){
    let complete_page_div = document.createElement('div')
    complete_page_div.classList.add("complete_page")
        let asthetic_art_img = document.createElement('img')
        asthetic_art_img.src="Assets/Images/Asthetic Art.png"
        asthetic_art_img.classList.add("asthetic_art")
        complete_page_div.appendChild(asthetic_art_img)

        let sticky_nav_var_background_shadow = document.createElement('div')
        sticky_nav_var_background_shadow.classList.add("sticky_nav_var_background_shadow")
        complete_page_div.appendChild(sticky_nav_var_background_shadow)

        profile_panel_func()
        
        top_div_func(complete_page_div)
        search_div_func(complete_page_div)
        
        let main_div_for_complete_page = document.createElement('div')
        main_div_for_complete_page.id="main_div_for_complete_page";
            
            banner_div_func(main_div_for_complete_page)
            categories_div_func(main_div_for_complete_page)

            //menu_item_div_func(complete_page_div,"All")
            menu_item_div_func(main_div_for_complete_page,"Pizza")
            menu_item_div_func(main_div_for_complete_page,"Burger")
            menu_item_div_func(main_div_for_complete_page,"Pasta")
            menu_item_div_func(main_div_for_complete_page,"Beverages")
            menu_item_div_func(main_div_for_complete_page,"Dessert")

        complete_page_div.appendChild(main_div_for_complete_page);

        let main_div_for_search_page = document.createElement('div')
        main_div_for_search_page.id="main_div_for_search_page";
        main_div_for_search_page.style.display='none'

        
            //create_menu_card("Double Cheese Margherita","Pizza1 dsjd sdfknsadfvvjhj dfvc fdsv erfdv rsdv",0,"Assets/Menu/Pizza/Double_Cheese_Margherita.png",main_div_for_search_page,"id_of_the_menu_item")
        
        complete_page_div.appendChild(main_div_for_search_page);



        console.log("Done");

    document.body.appendChild(complete_page_div)


}

function getUsernameFromUrl(){
    Username=window.location.href.split("=")[1]
    return Username
}

function profile_panel_func(){
    Username = getUsernameFromUrl()
    console.log(Username);

    removeBanner()

    body=document.body
    let profile_panel_div = document.createElement('div')
    profile_panel_div.classList.add("profile_panel_div")

        let profile_panel = document.createElement('div')
        profile_panel.classList.add("profile_panel")

            let profile_panel_close_panel = document.createElement('i')
            profile_panel_close_panel.classList.add("fa-solid" ,"fa-xmark" ,"profile_panel_close_button","profile_interactive_buttons")
            profile_panel_close_panel.onclick = function(){closeProfile()}
            profile_panel.appendChild(profile_panel_close_panel)

            let logo_img = document.createElement('p')
            logo_img.classList.add("logo_img")
            logo_img.textContent="Delish"
            profile_panel.appendChild(logo_img)

            let pp0=create_Profile_buttons("Home","fa-solid","fa-house-chimney","profile_panel_icons",profile_panel)
            let pp1=create_Profile_buttons("My Profile","fa-solid","fa-user","profile_panel_icons",profile_panel)
            let pp3=create_Profile_buttons("My Cart","fa-solid","fa-cart-shopping","profile_panel_icons",profile_panel)
            let pp2=create_Profile_buttons("My Orders","fa-solid","fa-copy","profile_panel_icons",profile_panel)
            let pp4=create_Profile_buttons("About Us","fa-solid","fa-circle-info","profile_panel_icons",profile_panel)
            
            pp0.onclick=function(){ProfileBtnInteraction(this,"HomePage.html?uname="+Username)}
            if(Username=="guest"){
                
                pp1.onclick=function(){
                    let confirmAction = confirm("Do You want to Login?");
                    if (confirmAction) {
                        ProfileBtnInteraction(this,"index.html")
                    }
                }
                pp3.onclick=function(){
                    let confirmAction = confirm("Do You want to Login?");
                    if (confirmAction) {
                        ProfileBtnInteraction(this,"index.html")
                    }
                }
                pp2.onclick=function(){
                    let confirmAction = confirm("Do You want to Login?");
                    if (confirmAction) {
                        ProfileBtnInteraction(this,"index.html")
                    }
                }
            }
            else{
                pp1.onclick=function(){ProfileBtnInteraction(this,"myProfile.html?uname="+Username)}
                pp3.onclick=function(){OpenCart(this)}
                pp2.onclick=function(){ProfileBtnInteraction(this,"my_orders.html?uname="+Username)}
            }


            pp4.onclick=function(){ProfileBtnInteraction(this,"About_us.html?uname="+Username)}

            let light_mode_button = document.createElement('i')
            let dark_mode_button = document.createElement('i')
            
            light_mode_button.classList.add("fa-solid" ,"fa-sun" ,"dark_light_mode_button","profile_interactive_buttons")
            light_mode_button.style.display='block'
            light_mode_button.onclick = function() {ChangeToDarkMode(this,dark_mode_button)}
            profile_panel.appendChild(light_mode_button)
            
            dark_mode_button.classList.add("fa-solid" ,"fa-moon" ,"dark_light_mode_button","profile_interactive_buttons")
            dark_mode_button.style.display='none'
            dark_mode_button.onclick = function() {ChangeToDarkMode(this,light_mode_button)}
            profile_panel.appendChild(dark_mode_button)

            let setting_button = document.createElement('a')
            setting_button.classList.add("fa-solid" ,"fa-right-from-bracket" ,"setting_button","profile_interactive_buttons")
            setting_button.onclick = function(){ProfileBtnInteraction(this,"index.html")}
            profile_panel.appendChild(setting_button)

        profile_panel_div.appendChild(profile_panel)

    body.appendChild(profile_panel_div)
}

function create_Profile_buttons(text,icon_class1,icon_class2,icon_class3,profile_panel){
    let profile_panel_buttons = document.createElement('a')
    profile_panel_buttons.classList.add("profile_panel_buttons")

        let profile_panel_icons = document.createElement('i')
        profile_panel_icons.classList.add(icon_class1,icon_class2,icon_class3)
        profile_panel_buttons.appendChild(profile_panel_icons)

        let profile_panel_text = document.createElement('p')
        profile_panel_text.classList.add("profile_panel_text")
        profile_panel_text.textContent=text
        profile_panel_buttons.appendChild(profile_panel_text)

    profile_panel.appendChild(profile_panel_buttons)
    return profile_panel_buttons
}

function top_div_func(complete_page_div){
        let top_div = document.createElement('div')
        top_div.classList.add('top_div')

            let delivering_to_heading = document.createElement('p')
            delivering_to_heading.classList.add("delivering_to_heading")
            delivering_to_heading.textContent="Delivering To"
            top_div.appendChild(delivering_to_heading)

            let location_set_btn = document.createElement('div')
            location_set_btn.classList.add('location_set_btn')
            //location_set_btn.onclick=function(){doSomething("Set Location")}
            
            let location_icon = document.createElement('i')
            location_icon.classList.add("fa-sharp","fa-solid","fa-location-dot")
            location_set_btn.appendChild(location_icon)

            
            let location_add_text = document.createElement('p')
            location_add_text.classList.add("location_set_btn","location_add_text")
            location_add_text.textContent="The current location is unknown"
            location_set_btn.appendChild(location_add_text)
            top_div.appendChild(location_set_btn)

            if(getUsernameFromUrl()!="guest"){
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    getResponseText = xhttp.responseText;
                    user_detail=getResponseText.split(",")
                    console.log(user_detail);
                    location_add_text.textContent=user_detail[9]+","+user_detail[6]+","+user_detail[7]
                }
                xhttp.open("GET", "PHP Files/GetDetails.php?uname="+getUsernameFromUrl());
                xhttp.send();
            }
            
        
            let cart_button = document.createElement('a')
            cart_button.classList.add("cart_button")
            
            if(Username=="guest"){
                
                cart_button.onclick=function(){
                    let confirmAction = confirm("Do You want to Login?");
                    if (confirmAction) {
                        ProfileBtnInteraction(this,"index.html")
                    }
                }
            }
            else{
                cart_button.onclick = function() {OpenCart(this)}
            }

                let cart_icon = document.createElement('i')
                cart_icon.classList.add("fa-solid","fa-cart","fa-cart-shopping")
                cart_button.appendChild(cart_icon)
            top_div.appendChild(cart_button)

        complete_page_div.appendChild(top_div)
}

function search_div_func(complete_page_div){
    let search_div = document.createElement('div')
    search_div.classList.add("search_div")

        let search_box_div = document.createElement('div')
        search_box_div.classList.add("search_box_div")

            let menu_box_logo = document.createElement('h1')
            menu_box_logo.classList.add("menu_box_logo")
                let menu_box_icon = document.createElement('i')
                menu_box_icon.classList.add("fa-solid","fa-bars")
                menu_box_icon.onclick=function(){openProfile()}
                menu_box_logo.appendChild(menu_box_icon)
            search_box_div.appendChild(menu_box_logo)
            
            let search_box = document.createElement('input')
            search_box.classList.add("search_box")
            search_box.onkeyup=function(){searching()}

            search_box.addEventListener('keypress', logKey);
            
            search_box.placeholder="Search"
            search_box_div.appendChild(search_box)

            let search_box_logo = document.createElement('h1')
            search_box_logo.classList.add("search_box_logo")
                let search_box_icon = document.createElement('i')
                search_box_icon.classList.add("fa-solid","fa-magnifying-glass")
                search_box_icon.onclick=function(){searchButtonClicked()}
                search_box_logo.appendChild(search_box_icon)
            search_box_div.appendChild(search_box_logo)

        search_div.appendChild(search_box_div)

    complete_page_div.appendChild(search_div)
}

function banner_div_func(complete_page_div){
    let banner_div = document.createElement('div')
    banner_div.classList.add("banner_div","snaps_inline")

        create_banners("Assets/Images/Banner.png",banner_div)
        create_banners("Assets/Images/Banner.png",banner_div)
        create_banners("Assets/Images/Banner.png",banner_div)

    complete_page_div.appendChild(banner_div)
}

function create_banners(img_src,banner_container){
    let banner_img = document.createElement('img')
    banner_img.src=img_src
    banner_img.classList.add("banner_img")
    banner_img.onclick=function(){bannerClicked()}
    banner_container.appendChild(banner_img)
}

function categories_div_func(complete_page_div){
    let categories_div = document.createElement('div')
    categories_div.classList.add("categories_div")

        let categories_container = document.createElement('div')
        categories_container.classList.add("categories_container")

            create_categories_button("All",null,categories_container,1)
            create_categories_button("Pizza","Assets/Icons/Pizza_icon.png",categories_container,0)
            create_categories_button("Burger","Assets/Icons/Burger_icon.png",categories_container,0)
            create_categories_button("Pasta","Assets/Icons/Pasta_icon.png",categories_container,0)
            create_categories_button("Beverages","Assets/Icons/Beverages_icon.png",categories_container,0)
            create_categories_button("Dessert","Assets/Icons/Dessert_icon.png",categories_container,0)

        categories_div.appendChild(categories_container)
    complete_page_div.appendChild(categories_div)
}

function create_categories_button(text,icon_src,categories_container,default_category){
    let categories_btn = document.createElement('div')
    categories_btn.classList.add("categories_btn")
    if(icon_src!=null){
        let categories_icons = document.createElement('img')
        categories_icons.classList.add("categories_icons")
        categories_icons.src=icon_src
        categories_btn.appendChild(categories_icons)
    }
    else{
        categories_btn.style.paddingLeft="13px"
    }
    let categories_txt = document.createElement('p')
    categories_txt.classList.add("categories_txt")
    categories_txt.textContent=text
    categories_btn.appendChild(categories_txt)
    categories_btn.onclick=function(){Category_selected(this,categories_txt,text)}
    categories_container.appendChild(categories_btn)
    if(default_category==1){
        categories_btn.style.backgroundColor="var(--primaryColor4D)"
        categories_txt.style.color="var(--primaryColor1D)"
    }
}

function Category_selected(sel_btn,text,div_text){
    let category_btns=document.getElementsByClassName("categories_btn")
    let category_txt=document.getElementsByClassName("categories_txt")
    for(i=0;i<category_btns.length;i++){
        category_btns[i].style.backgroundColor="var(--primaryColor1D)"
        category_txt[i].style.color="var(--primaryColor3D)"
    }

    if(div_text=="All"){
        document.getElementById("Pizza-div").style.display="block";
        document.getElementById("Burger-div").style.display="block";
        document.getElementById("Pasta-div").style.display="block";
        document.getElementById("Beverages-div").style.display="block";
        document.getElementById("Dessert-div").style.display="block";
    }
    else{
        document.getElementById("Pizza-div").style.display="none";
        document.getElementById("Burger-div").style.display="none";
        document.getElementById("Pasta-div").style.display="none";
        document.getElementById("Beverages-div").style.display="none";
        document.getElementById("Dessert-div").style.display="none";
    
        document.getElementById(div_text+"-div").style.display="block";
    }

    sel_btn.style.backgroundColor="var(--primaryColor4D)"
    text.style.color="var(--primaryColor1D)"
}

function menu_item_div_func(complete_page_div,type_of_food){
    let menu_item_div = document.createElement('div')
    menu_item_div.classList.add("menu_item_div")
    menu_item_div.id=type_of_food+"-div"
    menu_item_div.style.display="block"
    if(type_of_food=="All"){
        menu_item_div.style.display="block"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        getResponseText = this.responseText;
        const allMenuItemsOfParticularCategory = getResponseText.split(",")
        for(i=1;i<allMenuItemsOfParticularCategory.length;i++){

            const xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
                getResponseText2 = this.responseText;
                const menu_detail_from_sql=getResponseText2.split(",")
                create_menu_card(menu_detail_from_sql[1],menu_detail_from_sql[2],menu_detail_from_sql[4],menu_detail_from_sql[3],menu_item_div,menu_detail_from_sql[0],menu_detail_from_sql[6],0,1)
            }
            xhttp2.open("GET", "PHP Files/menu_updation.php?type="+type_of_food+"&id="+allMenuItemsOfParticularCategory[i]);
            xhttp2.send();
            
        }
    }
    xhttp.open("GET", "PHP Files/menu_updation.php?type="+type_of_food+"&id=");
    xhttp.send();

    complete_page_div.appendChild(menu_item_div)
}

function create_menu_card(name,description,price,img_src,menu_item_div,id_of_the_menu_item,in_detail_img,default_value,create_details){
    if(create_details==1){
        create_in_detail_menu(name,description,price,id_of_the_menu_item,in_detail_img,default_value);
    }
    let menu_card_div = document.createElement('div')
    menu_card_div.classList.add("menu_card_div")
    
        let menu_card_img = document.createElement('div')
        menu_card_img.classList.add("menu_card_img")

            let Menu_card_img_img = document.createElement('img')
            Menu_card_img_img.classList.add("menu_card_img_img")
            Menu_card_img_img.src=img_src
            menu_card_img.appendChild(Menu_card_img_img)
        
        menu_card_div.appendChild(menu_card_img)

        let menu_card_description = document.createElement('div')
        menu_card_description.classList.add("menu_card_div_description")

            let menu_card_description_name = document.createElement('p')
            menu_card_description_name.classList.add("menu_card_description_name")
            menu_card_description_name.onclick=function(){
                let popUpMenuCard = document.getElementById(id_of_the_menu_item+"_in_detail")
                document.body.style.overflow='hidden'
                popUpMenuCard.classList.remove("menu_item_in_detail_div_close")
                popUpMenuCard.classList.add("menu_item_in_detail_div_open")
            }
            menu_card_description_name.textContent=name
            menu_card_description.appendChild(menu_card_description_name)

            let menu_card_description_detail = document.createElement('p')
            menu_card_description_detail.classList.add("menu_card_description_detail")
            menu_card_description_detail.textContent=description
            menu_card_description.appendChild(menu_card_description_detail)

            let menu_card_price = document.createElement('button')
            menu_card_price.classList.add("menu_card_price")
            menu_card_price.textContent="$"+price
            menu_card_description.appendChild(menu_card_price)

            let menu_card_qty_div = document.createElement('div')
            menu_card_qty_div.classList.add("menu_card_qty_div")

                let menu_card_qty_qty = document.createElement('p')
                
                let menu_card_add_button = document.createElement('p')
                menu_card_add_button.classList.add("menu_card_add_button",id_of_the_menu_item+"_btn")
                menu_card_add_button.onclick=function(){addBtnClicked(id_of_the_menu_item+"_btn",id_of_the_menu_item+"_text",id_of_the_menu_item+"_div")}
                menu_card_add_button.textContent="Add"
                menu_card_qty_div.appendChild(menu_card_add_button)

                let divvvvvv = document.createElement('div')
                divvvvvv.classList.add(id_of_the_menu_item+"_div")
                divvvvvv.style.display="none"
                divvvvvv.style.flexWrap='wrap'

                
                    let menu_card_qty_minus = document.createElement('p')
                    menu_card_qty_minus.classList.add("menu_card_qty_minus","menu_card_qty")
                    menu_card_qty_minus.style.width='33%'
                    menu_card_qty_minus.onclick=function(){decrement_qty(id_of_the_menu_item+"_text",id_of_the_menu_item+"_btn",id_of_the_menu_item+"_div")}
                    menu_card_qty_minus.textContent="-"
                    divvvvvv.appendChild(menu_card_qty_minus)

                    menu_card_qty_qty.classList.add("menu_card_qty_qty","menu_card_qty",id_of_the_menu_item+"_text")
                    menu_card_qty_qty.id=id_of_the_menu_item
                    menu_card_qty_qty.style.width='33%'
                    menu_card_qty_qty.textContent="0"
                    divvvvvv.appendChild(menu_card_qty_qty)

                    let menu_card_qty_add = document.createElement('p')
                    menu_card_qty_add.classList.add("menu_card_qty_add","menu_card_qty")
                    menu_card_qty_add.style.width='33%'
                    menu_card_qty_add.onclick=function(){increment_qty(id_of_the_menu_item+"_text")}
                    menu_card_qty_add.textContent="+"
                    divvvvvv.appendChild(menu_card_qty_add)

                menu_card_qty_div.appendChild(divvvvvv)

                if(default_value!=0){
                    menu_card_add_button.style.display='none'
                    menu_card_qty_qty.textContent=default_value
                    divvvvvv.style.display='flex'
                }
            
            menu_card_description.appendChild(menu_card_qty_div)

        menu_card_div.appendChild(menu_card_description)

    menu_item_div.appendChild(menu_card_div)
}

function create_in_detail_menu(name,description,price,id_of_the_menu_item,in_detail_img,default_value){
    let menu_item_in_detail_div = document.createElement('div')
    menu_item_in_detail_div.classList.add("menu_item_in_detail_div")
    menu_item_in_detail_div.id=id_of_the_menu_item+"_in_detail"

        let menu_item_in_detail_close = document.createElement('button')
        menu_item_in_detail_close.classList.add("menu_item_in_detail_close")
        menu_item_in_detail_close.onclick=function(){
            document.body.style.overflow='auto'
            menu_item_in_detail_div.classList.add("menu_item_in_detail_div_close")
            menu_item_in_detail_div.classList.remove("menu_item_in_detail_div_open")
        }
        menu_item_in_detail_div.appendChild(menu_item_in_detail_close)

        let menu_item_in_detail = document.createElement('div')
        menu_item_in_detail.classList.add("menu_item_in_detail")

            let close_btn = document.createElement('i')
            close_btn.classList.add("fa-solid","fa-xmark","close_btn_login_signUp")
            close_btn.onclick=function(){
                document.body.style.overflow='auto'
                menu_item_in_detail_div.classList.add("menu_item_in_detail_div_close")
                menu_item_in_detail_div.classList.remove("menu_item_in_detail_div_open")
            }
            menu_item_in_detail.appendChild(close_btn)

            let menu_item_in_detail_heading = document.createElement('p')
            menu_item_in_detail_heading.classList.add("menu_item_in_detail_heading")
            menu_item_in_detail_heading.textContent=name
            menu_item_in_detail.appendChild(menu_item_in_detail_heading)

            let menu_item_in_detail_img = document.createElement('img')
            menu_item_in_detail_img.classList.add("menu_item_in_detail_img")
            menu_item_in_detail_img.src=in_detail_img
            menu_item_in_detail.appendChild(menu_item_in_detail_img)

            let menu_item_in_detail_description = document.createElement('p')
            menu_item_in_detail_description.classList.add("menu_item_in_detail_description")
            menu_item_in_detail_description.textContent=description
            menu_item_in_detail.appendChild(menu_item_in_detail_description)

            let menu_item_in_detail_below_div = document.createElement('div')
            menu_item_in_detail_below_div.classList.add("menu_item_in_detail_below_div")
            menu_item_in_detail_below_div.style.marginBottom="30px"

                let menu_item_in_detail_price = document.createElement('button')
                menu_item_in_detail_price.classList.add("menu_item_in_detail_price")
                menu_item_in_detail_price.textContent="$"+price
                menu_item_in_detail_below_div.appendChild(menu_item_in_detail_price)

                let menu_item_in_detail_qty_add = document.createElement('p')
                menu_item_in_detail_qty_add.classList.add("menu_item_in_detail_qty_add",id_of_the_menu_item+"_btn")
                menu_item_in_detail_qty_add.onclick=function(){addBtnClicked(id_of_the_menu_item+"_btn",id_of_the_menu_item+"_text",id_of_the_menu_item+"_div")}
                menu_item_in_detail_qty_add.textContent="Add"
                menu_item_in_detail_below_div.appendChild(menu_item_in_detail_qty_add)

                let menu_item_in_detail_qty_increment_decrement = document.createElement('div')
                menu_item_in_detail_qty_increment_decrement.classList.add("menu_item_in_detail_qty_increment_decrement",id_of_the_menu_item+"_div")

                    let menu_item_in_detail_qty_add_btn = document.createElement('p')
                    menu_item_in_detail_qty_add_btn.classList.add("menu_item_in_detail_qty_add_btn","menu_item_in_detail_qty_btn")
                    menu_item_in_detail_qty_add_btn.onclick=function(){decrement_qty(id_of_the_menu_item+"_text",id_of_the_menu_item+"_btn",id_of_the_menu_item+"_div")}
                    menu_item_in_detail_qty_add_btn.textContent="-"
                    menu_item_in_detail_qty_increment_decrement.appendChild(menu_item_in_detail_qty_add_btn)

                    let menu_item_in_detail_qty_qty = document.createElement('p')
                    menu_item_in_detail_qty_qty.classList.add("menu_item_in_detail_qty_qty","menu_item_in_detail_qty_btn",id_of_the_menu_item+"_text")
                    menu_item_in_detail_qty_qty.textContent="0"
                    menu_item_in_detail_qty_increment_decrement.appendChild(menu_item_in_detail_qty_qty)

                    let menu_item_in_detail_qty_minus_btn = document.createElement('p')
                    menu_item_in_detail_qty_minus_btn.classList.add("menu_item_in_detail_qty_minus_btn","menu_item_in_detail_qty_btn")
                    menu_item_in_detail_qty_minus_btn.onclick=function(){increment_qty(id_of_the_menu_item+"_text")}
                    menu_item_in_detail_qty_minus_btn.textContent="+"
                    menu_item_in_detail_qty_increment_decrement.appendChild(menu_item_in_detail_qty_minus_btn)

                menu_item_in_detail_below_div.appendChild(menu_item_in_detail_qty_increment_decrement)

                if(default_value!=0){
                    menu_item_in_detail_qty_add.style.display='none'
                    menu_item_in_detail_qty_increment_decrement.style.display='flex'
                    menu_item_in_detail_qty_qty.textContent=default_value
                }

            menu_item_in_detail.appendChild(menu_item_in_detail_below_div)

        menu_item_in_detail_div.appendChild(menu_item_in_detail)

    document.body.appendChild(menu_item_in_detail_div)
}

function profile_initialization(){
    profile_panel_func()
    let asthetic_art_img = document.createElement('img')
    asthetic_art_img.src="Assets/Images/Asthetic Art.png"
    asthetic_art_img.classList.add("asthetic_art")
    document.body.appendChild(asthetic_art_img)

    let div1 = document.createElement('div')
    div1.classList.add("about_us_header_header")
        let h11 = document.createElement('h1')
        h11.classList.add("about_us_menu_box_logo")
        h11.onclick=function() {openProfile()}
            i1 = document.createElement('i')
            i1.classList.add("fa-solid","fa-bars")
            h11.appendChild(i1)
        div1.appendChild(h11)
        let p1 = document.createElement('p')
        p1.classList.add("about_us_logo_text")
        p1.textContent="Delish"
        div1.appendChild(p1)
    document.body.appendChild(div1)

    
    let profile_detail_div = document.createElement('div')
    profile_detail_div.classList.add("profile_detail_div")
    profile_detail_div.style.top='50px'    
    profile_detail_div.style.position="relative"
        let signup_panel = document.createElement('div')
        signup_panel.classList.add("signup_panel")
        signup_panel.style.overflowY="scroll"
        signup_panel.style.backgroundColor='transparent'
    
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                getResponseText = xhttp.responseText;
                user_detail=getResponseText.split(",")
                console.log(user_detail);
                MyProfile(getUsernameFromUrl(),user_detail[0],user_detail[1],user_detail[2],user_detail[3],user_detail[4],user_detail[5],user_detail[6],user_detail[7],user_detail[8],user_detail[9],user_detail[10],signup_panel)
            }
            xhttp.open("GET", "PHP Files/GetDetails.php?uname="+getUsernameFromUrl());
            xhttp.send();
    
        
        
            profile_detail_div.appendChild(signup_panel)
    document.body.appendChild(profile_detail_div)
}

function MyProfile(puname,fname,lname,uname,phno,pass,img_src,sadd,city,state,hno,zip,container){
    
    let divvv = document.createElement('div')
    divvv.style.position="relative"
    container.appendChild(divvv)
    
    let pimg = document.createElement('img')
    pimg.src=img_src
    pimg.classList.add("profile_img")
    divvv.appendChild(pimg)
    
    let pimg_div = document.createElement('div')
    pimg_div.classList.add("change_profile_picture")
        let tap_to_edit = document.createElement('button')
        tap_to_edit.textContent="Tap To Change"
        tap_to_edit.classList.add("tap_to_edit_text")
        pimg_div.appendChild(tap_to_edit)
    divvv.appendChild(pimg_div)

    let edit = document.createElement('button')
    edit.classList.add("profile_edit_btn")
    edit.textContent="Edit"
    container.appendChild(edit)

    let inputs=[];

    let name_div = document.createElement('div')
    name_div.classList.add("name_div_signup")
        
        inputs[0] = document.createElement('input')
        inputs[0].classList.add("signup_input_Name")
        inputs[0].placeholder="First Name"
        inputs[0].value=fname
        inputs[0].readOnly=true
        name_div.appendChild(inputs[0])

        inputs[1] = document.createElement('input')
        inputs[1].classList.add("signup_input_Name")
        inputs[1].placeholder="Last Name"
        inputs[1].value=lname
        inputs[1].readOnly=true
        name_div.appendChild(inputs[1])

    container.appendChild(name_div)

    inputs[2] = document.createElement('input')
    inputs[2].classList.add("login_signup_input_place_holder")
    inputs[2].placeholder="Username"
    inputs[2].value=uname
    inputs[2].readOnly=true
    container.appendChild(inputs[2])

    inputs[3] = document.createElement('input')
    inputs[3].classList.add("login_signup_input_place_holder")
    inputs[3].placeholder="Phone Number"
    inputs[3].value=phno
    inputs[3].readOnly=true
    container.appendChild(inputs[3])

    let passwordHolderdiv1 = document.createElement('div')
    passwordHolderdiv1.classList.add("password_holder")
        inputs[4] = document.createElement('input')
        inputs[4].classList.add("login_signup_input_place_holder")
        inputs[4].placeholder="Password"
        inputs[4].value=pass
        inputs[4].readOnly=true
        inputs[4].type="Password"
        passwordHolderdiv1.appendChild(inputs[4])

        let eye_icon1 = document.createElement('i')
        eye_icon1.classList.add("fa-solid","fa-eye","eye")

        passwordHolderdiv1.appendChild(eye_icon1)
    container.appendChild(passwordHolderdiv1)


    let passwordHolderdiv2 = document.createElement('div')
    passwordHolderdiv2.classList.add("password_holder")
        
        inputs[5] = document.createElement('input')
        inputs[5].classList.add("login_signup_input_place_holder")
        inputs[5].placeholder="Confirm Password"
        inputs[5].value=pass
        inputs[5].readOnly=true
        inputs[5].type="Password"
        passwordHolderdiv2.appendChild(inputs[5])

        let eye_icon2 = document.createElement('i')
        eye_icon2.classList.add("fa-solid","fa-eye","eye")
        
        passwordHolderdiv2.appendChild(eye_icon2)
    container.appendChild(passwordHolderdiv2)

    let address_heading = document.createElement('p')
    address_heading.classList.add("address_heading_signUp")
    address_heading.textContent="Address"
    container.appendChild(address_heading)

    inputs[6] = document.createElement('input')
    inputs[6].classList.add("login_signup_input_place_holder")
    inputs[6].placeholder="Street Address"
    inputs[6].value=sadd
    inputs[6].readOnly=true
    container.appendChild(inputs[6])

    let street_div = document.createElement('div')
    street_div.classList.add("name_div_signup")
        
        inputs[7] = document.createElement('input')
        inputs[7].classList.add("signup_input_Name")
        inputs[7].placeholder="City"
        inputs[7].value=city
        inputs[7].readOnly=true
        street_div.appendChild(inputs[7])

        inputs[8] = document.createElement('input')
        inputs[8].classList.add("signup_input_Name")
        inputs[8].placeholder="State"
        inputs[8].value=state
        inputs[8].readOnly=true
        street_div.appendChild(inputs[8])

    container.appendChild(street_div)

    let street_div2 = document.createElement('div')
    street_div2.classList.add("name_div_signup")
        
        inputs[9] = document.createElement('input')
        inputs[9].classList.add("signup_input_Name")
        inputs[9].placeholder="House No"
        inputs[9].value=hno
        inputs[9].readOnly=true
        street_div2.appendChild(inputs[9])

        inputs[10] = document.createElement('input')
        inputs[10].classList.add("signup_input_Name")
        inputs[10].placeholder="Zip Code"
        inputs[10].value=zip
        inputs[10].readOnly=true
        street_div2.appendChild(inputs[10])

    container.appendChild(street_div2)

    let setError = document.createElement('p')
    setError.style.color="red"
    setError.style.fontSize="small"
    setError.style.margin="0 auto"
    setError.style.width="80vw"
    setError.style.display="none"
    setError.style.textAlign="center"
    setError.textContent="Not Matching"
    container.appendChild(setError)

    let done = document.createElement('button')
    done.classList.add("Edit_done_btn")
    done.textContent="Done"
    container.appendChild(done)

    edit.onclick=function(){
        done.style.display="block"
        edit.style.display="none"
        pimg_div.style.display="block"
        for(i=0;i<=10;i++){
            inputs[i].readOnly=false
        }
        //inputs[2].readOnly=true

        eye_icon1.onclick = function(){
            if(inputs[4].type=="text")
            {
                inputs[4].type="password"
                eye_icon1.classList.remove("fa-eye-slash")
                eye_icon1.classList.add("fa-eye")
            }
            else{
                inputs[4].type="text"
                eye_icon1.classList.remove("fa-eye")
                eye_icon1.classList.add("fa-eye-slash")
            }
        }
        eye_icon2.onclick = function(){
            if(inputs[5].type=="text")
            {
                inputs[5].type="password"
                eye_icon2.classList.remove("fa-eye-slash")
                eye_icon2.classList.add("fa-eye")
            }
            else{
                inputs[5].type="text"
                eye_icon2.classList.remove("fa-eye")
                eye_icon2.classList.add("fa-eye-slash")
            }
        }
    }

    done.onclick=function(){
        for(i=0;i<=10;i++){
            inputs[i].onkeyup=function(){changetotransparentOnKeyUP(this)}
        }
        
        if(inputs[0].value=="" || inputs[1].value=="" || inputs[2].value=="" || inputs[3].value=="" || inputs[4].value=="" || inputs[5].value=="" || inputs[6].value=="" || inputs[7].value=="" || inputs[8].value=="" || inputs[9].value=="" || inputs[10].value==""){
            setError.textContent="Some or all fields are empty."
            setError.style.display="block"
        
            for(i=0;i<=10;i++){
                if(inputs[i].value==""){
                    inputs[i].style.borderColor="red"
                }
            }
        }
        else if(inputs[4].value!=inputs[5].value){
            setError.textContent="Passwords does not match."
            setError.style.display="block"
        }
        else{
            done.textContent=""
            let loading_icon = document.createElement('div')
                loading_icon.classList.add("loading_icon")
                done.appendChild(loading_icon)
                
                const xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    getResponseText2 = xhttp2.responseText;
                    console.log(getResponseText2);
                    if(getResponseText2=="Record updated successfully"){

                        location.replace("myProfile.html?uname="+inputs[2].value);
    
                        done.removeChild(loading_icon)
                        done.textContent="Done"
    
                        edit.style.display="block"
                        done.style.display="none"
                        pimg_div.style.display="none"
                        for(i=0;i<10;i++){
                            inputs[i].readOnly=true
                        }
                        container.scrollTop=0
                        setError.style.display="none"
    
                        eye_icon1.onclick = function(){}
                        eye_icon2.onclick = function(){}
                    }
                    else{
                        setError.textContent="Username already Exists"
                        setError.style.display="block"
                        done.removeChild(loading_icon)
                        done.textContent="Done"
                    }
                }
                doWhat="2"
                xhttp2.open("GET", "PHP Files/Update_details.php?puname="+puname+"&FirstName="+inputs[0].value+"&LastName="+inputs[1].value+"&Username="+inputs[2].value+"&PhoneNumber="+inputs[3].value+"&Profile_img_path="+""+"&Password="+inputs[4].value+"&Street="+inputs[6].value+"&City="+inputs[7].value+"&State="+inputs[8].value+"&HouseNo="+inputs[9].value+"&ZipCode="+inputs[10].value+"&DoWhat="+doWhat);
                xhttp2.send();
        }
    }

    tap_to_edit.onclick=function(){
        const apiKey = "AMTfNf4WcTcK0GJu2ZIkMz";
        const client = filestack.init(apiKey);
        const options = {
            onUploadDone: (uploadResponse) => {
                console.log("onUploadDone", uploadResponse);
                pimg.setAttribute("src", uploadResponse.filesUploaded[0].url);
                
                const xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    getResponseText2 = xhttp2.responseText;
                    console.log(getResponseText2);
                }
                doWhat="3"
                xhttp2.open("GET", "PHP Files/Update_details.php?puname="+puname+"&FirstName="+inputs[0].value+"&LastName="+inputs[1].value+"&Username="+inputs[2].value+"&PhoneNumber="+inputs[3].value+"&Profile_img_path="+uploadResponse.filesUploaded[0].url+"&Password="+inputs[4].value+"&Street="+inputs[6].value+"&City="+inputs[7].value+"&State="+inputs[8].value+"&HouseNo="+inputs[9].value+"&ZipCode="+inputs[10].value+"&DoWhat="+doWhat);
                xhttp2.send();
            },
        };
        client.picker(options).open();
    }
}

function ChangeToDarkMode(icon_1,icon_2){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    //Light-Mode
    if(rs.getPropertyValue('--primaryColor3D')=='rgba(255,255,255,1)'){
        r.style.setProperty('--primaryColor4D','rgb(180, 220, 47,1)');
        r.style.setProperty('--primaryColor3D', 'rgb(16,21,37,1)');
        r.style.setProperty('--primaryColor2D', 'rgba(255,255,255,1)');
        r.style.setProperty('--primaryColor2Dt', 'rgba(255,255,255,0)');
        r.style.setProperty('--primaryColor1D', 'rgb(226,226,226,1)');
        r.style.setProperty('--primaryAestheticColor0D','brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(95deg) brightness(93%) contrast(88%)')
    }
    //Dark-Mode
    else{
        r.style.setProperty('--primaryColor4D','rgb(205, 255, 6,1)');
        r.style.setProperty('--primaryColor3D', 'rgba(255,255,255,1)');
        r.style.setProperty('--primaryColor2D', 'rgb(16,21,37,1)');
        r.style.setProperty('--primaryColor2Dt', 'rgb(16,21,37,0)');
        r.style.setProperty('--primaryColor1D', 'rgb(32,37,56,1)');
        r.style.setProperty('--primaryAestheticColor0D','brightness(0) saturate(100%) invert(82%) sepia(90%) saturate(504%) hue-rotate(14deg) brightness(103%) contrast(101%)')
    }
    icon_1.style.display='none'
    icon_2.style.display='block'
}

function bannerClicked(){
    console.log("Banner Clicked Do Something");
}

function addBtnClicked(btn,text,div_elem){
    let btns = document.getElementsByClassName(btn);
    for(i=0;i<btns.length;i++){
        btns[i].style.display='none'
    }
    let div_elems = document.getElementsByClassName(div_elem);
    for(i=0;i<div_elems.length;i++){
        div_elems[i].style.display='flex'
    }
    increment_qty(text)
}

function decrement_qty(text,btn,div_elem){
    let btns = document.getElementsByClassName(btn);
    let textss = document.getElementsByClassName(text);
    let div_elems = document.getElementsByClassName(div_elem);

    for(i=0;i<btns.length;i++){
        j=parseInt(parseInt(textss[i].innerHTML)-1)
        textss[i].textContent=j
        if(j==0){
            btns[i].style.display='block'
            div_elems[i].style.display='none'
        }
    }
}

function increment_qty(text){
    let textss = document.getElementsByClassName(text);
    for(i=0;i<textss.length;i++){
        j=parseInt(parseInt(textss[i].innerHTML)+1)
        textss[i].textContent=j
    }
}

function doSomething(text){
    alert(text)
}

function openProfile(){
    let profilePanel = document.getElementsByClassName("profile_panel_div")
    profilePanel[0].classList.remove("profile_panel_div_transform2")
    profilePanel[0].classList.add("profile_panel_div_transform1")
    document.body.style.overflow="hidden"
}

function closeProfile(){
    let profilePanel = document.getElementsByClassName("profile_panel_div")
    profilePanel[0].classList.remove("profile_panel_div_transform1")
    profilePanel[0].classList.add("profile_panel_div_transform2")
    document.body.style.overflow="auto"
}

function goingToHomePage(btn){
    ProfileBtnInteraction(btn,"HomePage.html?uname=guest")
}
function goingToHomePageFromOrderPlaced(btn){
    let username = getUsernameFromUrl()
    ProfileBtnInteraction(btn,"HomePage.html?uname="+username)
}

function ProfileBtnInteraction(btn,text){
    btn.href=text 
}

function OpenLogin(){
    panel = document.getElementsByClassName("login_panel_div")
    panel[0].classList.remove("login_panel_div_close")
    panel[0].classList.add("login_panel_div_open")
}

function CloseLogin(){
    panel = document.getElementsByClassName("login_panel_div")
    panel[0].classList.remove("login_panel_div_open")
    panel[0].classList.add("login_panel_div_close")
}

function OpenSignUp(){
    panel = document.getElementsByClassName("signup_panel_div")
    panel[0].classList.remove("signup_panel_div_close")
    panel[0].classList.add("signup_panel_div_open")
}

function CloseSignUp(){
    panel = document.getElementsByClassName("signup_panel_div")
    panel[0].classList.remove("signup_panel_div_open")
    panel[0].classList.add("signup_panel_div_close")
}

function scrollleft(no) {
    if(no==0)
        document.getElementsByClassName('about_us_banner_container_div')[0].scrollLeft-=500
    else
    document.getElementsByClassName('about_us_banner_container_div')[0].scrollLeft+=500
}

function SignUpBtnClicked(btn){
    FirstName=document.getElementById("FirstName")
    LastName=document.getElementById("LastName")
    Username=document.getElementById("Username")
    PhoneNumber=document.getElementById("PhoneNumber")
    Password=document.getElementById("Password")
    ConfirmPassword=document.getElementById("ConfirmPassword")
    Street=document.getElementById("Street")
    City=document.getElementById("City")
    State=document.getElementById("State")
    HouseNo=document.getElementById("HouseNo")
    ZipCode=document.getElementById("ZipCode")

    FirstName.onkeyup=function(){changetotransparentOnKeyUP(this)}
    LastName.onkeyup=function(){changetotransparentOnKeyUP(this)}
    Username.onkeyup=function(){changetotransparentOnKeyUP(this)}
    PhoneNumber.onkeyup=function(){changetotransparentOnKeyUP(this)}
    Password.onkeyup=function(){changetotransparentOnKeyUP(this)}
    ConfirmPassword.onkeyup=function(){changetotransparentOnKeyUP(this)}
    Street.onkeyup=function(){changetotransparentOnKeyUP(this)}
    City.onkeyup=function(){changetotransparentOnKeyUP(this)}
    State.onkeyup=function(){changetotransparentOnKeyUP(this)}
    HouseNo.onkeyup=function(){changetotransparentOnKeyUP(this)}
    ZipCode.onkeyup=function(){changetotransparentOnKeyUP(this)}

    if(FirstName.value=="" || LastName.value=="" || Username.value=="" || PhoneNumber.value=="" || Password.value=="" || ConfirmPassword.value=="" || Street.value=="" || City.value=="" || State.value=="" || HouseNo.value=="" || ZipCode.value==""){
        document.getElementById("signup_already_exists").textContent="Some or all fields are empty."
        document.getElementById("signup_already_exists").style.display="block"

        if(FirstName.value=="") FirstName.style.borderColor="red"
        if(LastName.value=="") LastName.style.borderColor="red"
        if(Username.value=="") Username.style.borderColor="red"
        if(PhoneNumber.value=="") PhoneNumber.style.borderColor="red"
        if(Password.value=="") Password.style.borderColor="red"
        if(ConfirmPassword.value=="") ConfirmPassword.style.borderColor="red"
        if(Street.value=="") Street.style.borderColor="red"
        if(City.value=="") City.style.borderColor="red"
        if(State.value=="") State.style.borderColor="red"
        if(HouseNo.value=="") HouseNo.style.borderColor="red"
        if(ZipCode.value=="") ZipCode.style.borderColor="red"
    }
    else if(Password.value!=ConfirmPassword.value){
        document.getElementById("signup_already_exists").textContent="Passwords does not match."
        document.getElementById("signup_already_exists").style.display="block"
    }
    else{
        let btnnn = document.getElementById("sighnup_btn_loginPage")
        btnnn.innerHTML=""
        btnnn.onclick=function(){}
            let loading_icon = document.createElement('div')
            loading_icon.classList.add("loading_icon")
            btnnn.appendChild(loading_icon)


        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            getResponseText = this.responseText;
            console.log(getResponseText);
            if(getResponseText=="SignUp Invalid"){
                console.log("Already Exists");

                document.getElementById("sighnup_btn_loginPage").removeChild(loading_icon)
                document.getElementById("sighnup_btn_loginPage").innerHTML="Sign Up"
                document.getElementById("sighnup_btn_loginPage").onclick= function(){SignUpBtnClicked(this)}

                document.getElementById("signup_already_exists").textContent="Username or phone number already exists"
                document.getElementById("signup_already_exists").style.display="block"
            }
            else{
                const xhttp2 = new XMLHttpRequest();
                xhttp2.onload = function() {
                    getResponseText2 = xhttp2.responseText;
                    console.log(getResponseText2);
                    ProfileBtnInteraction(btn,"HomePage.html?uname="+Username.value)
                    btn.click();
                }
                doWhat="2"
                xhttp2.open("GET", "PHP Files/SignUp.php?FirstName="+FirstName.value+"&LastName="+LastName.value+"&Username="+Username.value+"&PhoneNumber="+PhoneNumber.value+"&Password="+Password.value+"&Street="+Street.value+"&City="+City.value+"&State="+State.value+"&HouseNo="+HouseNo.value+"&ZipCode="+ZipCode.value+"&DoWhat="+doWhat);
                xhttp2.send();
            }
        }
        doWhat="1"
        xhttp.open("GET", "PHP Files/SignUp.php?FirstName="+FirstName.value+"&LastName="+LastName.value+"&Username="+Username.value+"&PhoneNumber="+PhoneNumber.value+"&Password="+Password.value+"&Street="+Street.value+"&City="+City.value+"&State="+State.value+"&HouseNo="+HouseNo.value+"&ZipCode="+ZipCode.value+"&DoWhat="+doWhat);
        xhttp.send(); 
    }
}

function changetotransparentOnKeyUP(btn){
    btn.style.borderColor="transparent"
}

function LoginBtnClicked(btn){
    FirstName=document.getElementById("FirstName")
    LastName=document.getElementById("LastName")
    Username=document.getElementById("UsernameLogin")
    PhoneNumber=document.getElementById("PhoneNumber")
    Password=document.getElementById("PasswordLogin")
    ConfirmPassword=document.getElementById("ConfirmPassword")
    Street=document.getElementById("Street")
    City=document.getElementById("City")
    State=document.getElementById("State")
    HouseNo=document.getElementById("HouseNo")
    ZipCode=document.getElementById("ZipCode")

    Username.onkeyup=function(){changetotransparentOnKeyUP(this)}
    Password.onkeyup=function(){changetotransparentOnKeyUP(this)}

    if(Username.value=="" || Password.value==""){
        document.getElementById("login_does_not_match").textContent="Some or all fields are empty."
        document.getElementById("login_does_not_match").style.display="block"

        if(Username.value=="") Username.style.borderColor="red"
        if(Password.value=="") Password.style.borderColor="red"
    }
    else{
        let btnnn = document.getElementById("login_btn_loginPage")
        btnnn.innerHTML=""
        btnnn.onclick=function(){}
            let loading_icon = document.createElement('div')
            loading_icon.classList.add("loading_icon")
            btnnn.appendChild(loading_icon)

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            getResponseText = this.responseText;
            console.log(getResponseText);
            if(getResponseText=="Login Valid"){
                ProfileBtnInteraction(btn,"HomePage.html?uname="+Username.value)
                btn.click();
            }
            else if(getResponseText=="username does not exist"){
                document.getElementById("login_btn_loginPage").removeChild(loading_icon)
                document.getElementById("login_btn_loginPage").innerHTML="Login"
                document.getElementById("login_btn_loginPage").onclick= function(){LoginBtnClicked(this)}

                document.getElementById("login_does_not_match").textContent="Username does not exist."
                document.getElementById("login_does_not_match").style.display="block"
            }
            else{
                document.getElementById("login_btn_loginPage").removeChild(loading_icon)
                document.getElementById("login_btn_loginPage").innerHTML="Login"
                document.getElementById("login_btn_loginPage").onclick= function(){LoginBtnClicked(this)}

                document.getElementById("login_does_not_match").textContent="Passwords does not match."
                document.getElementById("login_does_not_match").style.display="block"
            }
        }
        doWhat="3"
        xhttp.open("GET", "PHP Files/SignUp.php?FirstName="+FirstName.value+"&LastName="+LastName.value+"&Username="+Username.value+"&PhoneNumber="+PhoneNumber.value+"&Password="+Password.value+"&Street="+Street.value+"&City="+City.value+"&State="+State.value+"&HouseNo="+HouseNo.value+"&ZipCode="+ZipCode.value+"&DoWhat="+doWhat);
        xhttp.send();
    }
}

function showPassword(elem){
    parent = elem.parentElement
    childs = parent.childNodes;
    if(childs[1].type=="text")
    {
        childs[1].type="password"
        childs[3].classList.remove("fa-eye-slash")
        childs[3].classList.add("fa-eye")
    }
    else{
        childs[1].type="text"
        childs[3].classList.remove("fa-eye")
        childs[3].classList.add("fa-eye-slash")
    }
}

function searchButtonClicked(){
    valueOfSearch = document.getElementsByClassName("search_box")[0].value
    valueOfSearch=valueOfSearch.replace(/^\s+|\s+$/gm,'');
    valueOfSearch=valueOfSearch.toUpperCase();
    console.log(valueOfSearch);
    if(valueOfSearch!=""){
        let main_div_for_complete_page = document.getElementById("main_div_for_complete_page");
        main_div_for_complete_page.style.display='none'
        let main_div_for_search_page = document.getElementById("main_div_for_search_page");
        main_div_for_search_page.style.display='block'

        /*let loading_icon = document.createElement('div')
        loading_icon.classList.add("loading_icon")
        main_div_for_search_page.appendChild(loading_icon)*/

        var child = main_div_for_search_page.lastElementChild; 
        while (child) {
            main_div_for_search_page.removeChild(child);
            child = main_div_for_search_page.lastElementChild;
        }
    
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            getResponseText = this.responseText;
            console.log(getResponseText);
            if(getResponseText=="Not Found"){
                let notFoundElem = document.createElement('p')
                notFoundElem.textContent="No Such Item Exists..."
                notFoundElem.style.textAlign='center'
                notFoundElem.style.color='var(--primaryColor3D)'
                main_div_for_search_page.appendChild(notFoundElem)
            }
            else{
                const allMenuItemsOfParticularCategory = getResponseText.split(",")
                for(i=1;i<allMenuItemsOfParticularCategory.length;i++){
        
                    const xhttp2 = new XMLHttpRequest();
                    xhttp2.onload = function() {
                        getResponseText2 = this.responseText;
                        console.log(getResponseText2);
                        const menu_detail_from_sql=getResponseText2.split(",")
                        default_value = document.getElementsByClassName(menu_detail_from_sql[0]+"_text")[0].innerHTML
                        console.log(default_value);
                        create_menu_card(menu_detail_from_sql[1],menu_detail_from_sql[2],menu_detail_from_sql[4],menu_detail_from_sql[3],main_div_for_search_page,menu_detail_from_sql[0],menu_detail_from_sql[6],default_value,0)
                    }
                    xhttp2.open("GET", "PHP Files/searchResult.php?name="+valueOfSearch+"&id="+allMenuItemsOfParticularCategory[i]);
                    xhttp2.send();
                }
            }
        }
        xhttp.open("GET", "PHP Files/searchResult.php?name="+valueOfSearch+"&id=");
        xhttp.send();
    }
    else{
        let main_div_for_complete_page = document.getElementById("main_div_for_complete_page");
        main_div_for_complete_page.style.display='block'
        let main_div_for_search_page = document.getElementById("main_div_for_search_page");
        main_div_for_search_page.style.display='none'
    }
}
const timerStarted = false;
function searching(){
    valueOfSearch = document.getElementsByClassName("search_box")[0].value
    if(valueOfSearch==""){
        let main_div_for_complete_page = document.getElementById("main_div_for_complete_page");
        main_div_for_complete_page.style.display='block'
        let main_div_for_search_page = document.getElementById("main_div_for_search_page");
        main_div_for_search_page.style.display='none'
    }
}

function logKey(e,valueOfSearch) {
    if(e.code == "Enter"){
        searchButtonClicked()
    }
}

function removeBanner(){
    let bannerNode = document.querySelector('[alt="www.000webhost.com"]');
    if(bannerNode!=null){
        let bannerNode2 = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
        bannerNode2.parentNode.removeChild(bannerNode2);
    }
}

function OpenCart(btn){
    const username = getUsernameFromUrl()
    if(username!="guest"){
        let menu_cards = document.getElementsByClassName("menu_card_qty_qty")
        for (i = 0; i < menu_cards.length; i++) {
            if(menu_cards[i].innerHTML!="0")
            {
    
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    getResponseText = this.responseText;
                    console.log(getResponseText);
                }
                xhttp.open("GET", "PHP Files/upload_to_cart.php?Username="+username+"&menu_id="+menu_cards[i].id+"&no_of_items="+menu_cards[i].innerHTML);
                xhttp.send();
            }
        }
    }
    ProfileBtnInteraction(btn,"My_Cart.html?uname="+username)
}

function MyCartLoad(){

    profile_panel_func()
    let asthetic_art_img = document.createElement('img')
    asthetic_art_img.src="Assets/Images/Asthetic Art.png"
    asthetic_art_img.classList.add("asthetic_art")
    document.body.appendChild(asthetic_art_img)

    let div1 = document.createElement('div')
    div1.classList.add("about_us_header_header")
    div1.style.position='relative'
        let h11 = document.createElement('h1')
        h11.classList.add("about_us_menu_box_logo")
        h11.onclick=function() {openProfile()}
            i1 = document.createElement('i')
            i1.classList.add("fa-solid","fa-bars")
            h11.appendChild(i1)
        div1.appendChild(h11)
        let p1 = document.createElement('p')
        p1.classList.add("about_us_logo_text")
        p1.textContent="Delish"
        div1.appendChild(p1)
    document.body.appendChild(div1)

    let my_cart_heading = document.createElement('p')
    my_cart_heading.classList.add("My_Cart_heading")
    my_cart_heading.textContent="My Cart"
    document.body.appendChild(my_cart_heading)

    let item_div = document.createElement('div')
    document.body.appendChild(item_div)


    const xhttp3 = new XMLHttpRequest();
    xhttp3.onload = function() {
        getResponseText3 = this.responseText;
        const order_no = getUsernameFromUrl()+"_"+getResponseText3;

        menu_item_div = item_div;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
    
            getResponseText = this.responseText;
            const result = getResponseText.split(',')
    
            for(i=0;i<result.length;i=i+2){
    
                if(result[i]!=""){
    
                    const m = parseInt(result[i+1]);
        
                    const xhttp2 = new XMLHttpRequest();
                    xhttp2.onload = function() {
                        getResponseText2 = this.responseText;
                        const menu_detail_from_sql=getResponseText2.split(",")
                        create_menu_card(menu_detail_from_sql[1],menu_detail_from_sql[2],menu_detail_from_sql[4],menu_detail_from_sql[3],menu_item_div,menu_detail_from_sql[0],menu_detail_from_sql[6],m,1)
                    }
                    xhttp2.open("GET", "PHP Files/my_cart_updation.php?id="+result[i]+"&get="+0);
                    xhttp2.send();
                }
            }
        }
        xhttp.open("GET", "PHP Files/my_cart_updation.php?order_no="+order_no+"&get=1");
        xhttp.send();

    }
    xhttp3.open("GET", "PHP Files/get_order_no.php?uname="+getUsernameFromUrl());
    xhttp3.send();

    


    let updateBTN = document.createElement('a');
    updateBTN.classList.add("login_signUp_btn")
    updateBTN.textContent="Proceed To Checkout"
    updateBTN.style.marginBottom="30px"
    updateBTN.onclick=function(){
        const username = getUsernameFromUrl()
        if(username!="guest"){
            let menu_cards = document.getElementsByClassName("menu_card_qty_qty")
            let bool = 0;
            for(m = 0; m<menu_cards.length;m++){
                if(menu_cards[m].innerHTML=="0"){
                    bool+=1
                    console.log(bool)
                    console.log(menu_cards.length)
                }
            }
            if(menu_cards.length!=0 && bool!=menu_cards.length){
                for (i = 0; i < menu_cards.length; i++) {
                    const xhttp = new XMLHttpRequest();
                    xhttp.onload = function() {
                        getResponseText = this.responseText;
                        console.log(getResponseText);
                    }
                    xhttp.open("GET", "PHP Files/upload_to_cart.php?Username="+username+"&menu_id="+menu_cards[i].id+"&no_of_items="+menu_cards[i].innerHTML);
                    xhttp.send();
                }
                ProfileBtnInteraction(updateBTN,"Checkout_page.html?uname="+username);
            }
            else{
                console.log("Add Some Items to the cart");
            }
        }
    }
    document.body.appendChild(updateBTN)
}

function checkout_func(){

    removeBanner()
    let asthetic_art_img = document.createElement('img')
    asthetic_art_img.src="Assets/Images/Asthetic Art.png"
    asthetic_art_img.classList.add("asthetic_art")
    document.body.appendChild(asthetic_art_img)

    let div1 = document.createElement('div')
    div1.classList.add("about_us_header_header")
    div1.style.position='relative'
        let p1 = document.createElement('p')
        p1.classList.add("about_us_logo_text")
        p1.textContent="Delish"
        div1.appendChild(p1)
    document.body.appendChild(div1)

    let checkout_heading = document.createElement('p')
    checkout_heading.classList.add("My_Cart_heading")
    checkout_heading.textContent="Summary"
    document.body.appendChild(checkout_heading)

    let menu_items_div = document.createElement('div')
    document.body.appendChild(menu_items_div)

    let subtotal = 0;

    let subtotalPrice,total,Tax;

    const xhttp3 = new XMLHttpRequest();
    xhttp3.onload = function() {
        getResponseText3 = this.responseText;
        const order_no = getUsernameFromUrl()+"_"+getResponseText3;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            
            getResponseText = this.responseText;
            const result = getResponseText.split(',')
            console.log(result);
            
            for(i=0;i<result.length;i=i+2){
                
                if(result[i]!=""){
                    
                    const xhttp2 = new XMLHttpRequest();
                    xhttp2.onload = function() {
                        getResponseText2 = this.responseText;
                        text = getResponseText2.split(",")
                        money = parseFloat(text[1])*parseFloat(text[2])
                        create_summary_cards(text[0],text[1],text[2],menu_items_div)
                        
                        subtotal+=parseFloat(text[2]*text[1])
                        
                        let subtotal_text = subtotal.toString()
                        let subtotal_text_decimal=subtotal_text.split(".");
                        let subtotal_text_no = subtotal_text_decimal[1];
                        if(subtotal_text_no && subtotal_text_no.length==1){
                            subtotal_text=subtotal_text_decimal[0]+"."+subtotal_text_decimal[1]+"0"
                        }
                        
                        subtotalPrice.textContent="$"+subtotal_text;
                        
                        
                        calcTax=parseFloat((18/100*subtotal*1.0).toFixed(2))
                        
                        let Tax_text = calcTax.toString()
                        let Tax_text_decimal=Tax_text.split(".");
                        let Tax_text_no = Tax_text_decimal[1];
                        if(Tax_text_no && Tax_text_no.length==1){
                            Tax_text=Tax_text_decimal[0]+"."+Tax_text_decimal[1]+"0"
                        }
                        
                        Tax.textContent="$"+Tax_text
                        
                        totalAmt = parseFloat((subtotal+calcTax).toFixed(2));
                        
                        let totalAmt_text = totalAmt.toString()
                        let totalAmt_text_decimal=totalAmt_text.split(".");
                        let totalAmt_text_no = totalAmt_text_decimal[1];
                        if(totalAmt_text_no && totalAmt_text_no.length==1){
                            totalAmt_text=totalAmt_text_decimal[0]+"."+totalAmt_text_decimal[1]+"0"
                        }
                        
                        total.textContent="$"+totalAmt_text;
                    }
                    xhttp2.open("GET", "PHP Files/summary.php?order_no="+order_no+"&menu_id="+result[i]);
                    xhttp2.send();
                }
    
            }
        }
        xhttp.open("GET", "PHP Files/my_cart_updation.php?order_no="+order_no+"&get=1");
        xhttp.send();

    }
    xhttp3.open("GET", "PHP Files/get_order_no.php?uname="+getUsernameFromUrl());
    xhttp3.send();

    let total_tax_div = document.createElement('div')
    
    
    
    total_tax_div.classList.add("total_tax_div")
        subtotalPrice = create_summary_cards_total_tax("SubTotal","","0",total_tax_div)
        Tax = create_summary_cards_total_tax("Estimated Tax","","0",total_tax_div)
    document.body.appendChild(total_tax_div)
    total = create_summary_cards_total_tax("Total","","0",document.body)

    username = getUsernameFromUrl()
    let updateBTN = document.createElement('a');
    updateBTN.classList.add("login_signUp_btn")
    updateBTN.textContent="Proceed To Payment"
    updateBTN.style.marginBottom="30px"
    updateBTN.onclick=function(){
        ProfileBtnInteraction(updateBTN,"Payment_Page.html?uname="+username);
    }
    document.body.appendChild(updateBTN)
}

function create_summary_cards(name,qty,price,menu_items_div){
    let each_item_div = document.createElement('div')
    each_item_div.classList.add("each_item_div")

        let each_item_name = document.createElement('p')
        each_item_name.classList.add("each_item_name")
        each_item_name.textContent=name
        each_item_div.appendChild(each_item_name)

        let each_item_qty = document.createElement('p')
        each_item_qty.classList.add("each_item_qty")
        each_item_qty.textContent=qty
        each_item_div.appendChild(each_item_qty)

        let each_item_price = document.createElement('p')
        each_item_price.classList.add("each_item_price")
        each_item_price.textContent="$"+price
        each_item_div.appendChild(each_item_price)
        
    menu_items_div.appendChild(each_item_div)
}

function create_summary_cards_total_tax(name,qty,price,menu_items_div){
    let each_item_div = document.createElement('div')
    each_item_div.classList.add("each_item_div_total")

        let each_item_name = document.createElement('p')
        each_item_name.classList.add("each_item_name")
        each_item_div.style.fontWeight="700"
        each_item_name.textContent=name
        each_item_div.appendChild(each_item_name)

        let each_item_qty = document.createElement('p')
        each_item_qty.classList.add("each_item_qty")
        each_item_qty.textContent=qty
        each_item_div.appendChild(each_item_qty)

        let each_item_price = document.createElement('p')
        each_item_price.classList.add("each_item_price")
        each_item_price.textContent="$"+price
        each_item_div.appendChild(each_item_price)
        
    menu_items_div.appendChild(each_item_div)
    return each_item_price;
}

function deliveryOption(option){
    let credit_debit_div = document.getElementById("credit_debit_div");
    let upi_div = document.getElementById("upi_div")

    if(option=='DebitOrCredit'){
        credit_debit_div.style.display='block'
        upi_div.style.display='none'
    }
    else if(option=='UPI'){
        credit_debit_div.style.display='none'
        upi_div.style.display='block'
    }
    else{
        credit_debit_div.style.display='none'
        upi_div.style.display='none'
    }
}

function pay_securely(btn){

    document.getElementById("button_click_please").onclick = function(){}
    let radio_credit = document.getElementById("radio_credit")
    let radio_upi = document.getElementById("radio_upi")
    let radio_cod = document.getElementById("radio_cod")
    let payment_method = "";
    if(radio_credit.checked){
        payment_method="Credit/Debit Card"
    }
    else if(radio_upi.checked){
        payment_method="UPI"
    }
    else if(radio_cod.checked){
        payment_method="Cash On Delivery"
    }
    else{
        console.log("Please Choose a payment Option");
        document.getElementById("button_click_please").onclick=function(){pay_securely()}
        return;
    }

    btn.textContent=""

    let loading_icon = document.createElement('div')
    loading_icon.classList.add("loading_icon")
    btn.appendChild(loading_icon)

    const username = getUsernameFromUrl()
    const xhttp3 = new XMLHttpRequest();
    xhttp3.onload = function() {

        getResponseText3 = this.responseText;
        const order_no = getUsernameFromUrl()+"_"+getResponseText3;

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            
            getResponseText = this.responseText;
            //console.log(getResponseText);
            if(getResponseText=="Record updated successfully"){
                ProfileBtnInteraction(btn,"order_placed.html?uname="+username);
                btn.click();
            }
            else{
                document.getElementById("button_click_please").onclick=function(){pay_securely()}
            }
        }
        xhttp.open("GET", "PHP Files/update_order_to_main_order_table.php?uname="+username+"&order_no="+order_no+"&payment_method="+payment_method);
        xhttp.send();
        
    }
    xhttp3.open("GET", "PHP Files/get_order_no.php?uname="+getUsernameFromUrl());
    xhttp3.send();
}

function create_my_orders_page(){
    let username = getUsernameFromUrl()
    profile_panel_func()

    let about_us_header_header = document.createElement('div')
    about_us_header_header.classList.add("about_us_header_header")
    about_us_header_header.style.position="relative"
        let about_us_menu_box_logo = document.createElement('h1')
        about_us_menu_box_logo.classList.add("about_us_menu_box_logo")
        about_us_menu_box_logo.onclick=function(){openProfile()}
            let fa_solid_bars = document.createElement('i')
            fa_solid_bars.classList.add("fa-solid","fa-bars")
            about_us_menu_box_logo.appendChild(fa_solid_bars)
        about_us_header_header.appendChild(about_us_menu_box_logo)
        let about_us_logo_text = document.createElement('p')
        about_us_logo_text.classList.add("about_us_logo_text")
        about_us_logo_text.textContent="Delish"
        about_us_header_header.appendChild(about_us_logo_text)
    document.body.appendChild(about_us_header_header)

    let asthetic_art = document.createElement('img')
    asthetic_art.classList.add("asthetic_art")
    asthetic_art.src="Assets/Images/Asthetic Art.png"
    document.body.appendChild(asthetic_art)

    let page_heading = document.createElement('p')
    page_heading.classList.add("My_Cart_heading")
    page_heading.textContent="My Orders"
    document.body.appendChild(page_heading)

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        
        getResponseText = this.responseText;
        let order_nos = getResponseText.split(",")
        for(i = 1; i < order_nos.length;i++){
            const xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
                getResponseText2 = this.responseText;
                let details = getResponseText2.split(",")
                create_my_orders_div(details[0],details[1],details[2],details[3],details[4],details[5],details[6],details[7])
            }
            xhttp2.open("GET", "PHP Files/myorders.php?uname="+username+"&doWhat="+order_nos[i]);
            xhttp2.send();
        }
    }
    xhttp.open("GET", "PHP Files/myorders.php?uname="+username+"&doWhat=1");
    xhttp.send();

}

function create_my_orders_div(order_no,date,month,hour,minute,total_items,price,order_status){
    let months;
    if(month=="1"){months="January"}
    else if(month=="2"){months="Febuary"}
    else if(month=="3"){months="March"}
    else if(month=="4"){months="April"}
    else if(month=="5"){months="May"}
    else if(month=="6"){months="June"}
    else if(month=="7"){months="July"}
    else if(month=="8"){months="August"}
    else if(month=="9"){months="September"}
    else if(month=="10"){months="October"}
    else if(month=="11"){months="November"}
    else{months="December"}
    let my_order_div = document.createElement('div')
    my_order_div.classList.add("my_order_div")
    document.body.appendChild(my_order_div)

    let p1 = document.createElement('p')
    p1.style.margin='0'
    p1.style.fontWeight='700'
    p1.textContent=order_no
    my_order_div.appendChild(p1)

    let p2 = document.createElement('p')
    p2.style.margin='0'
    p2.textContent=date+" "+months+" at "+hour+":"+minute
    my_order_div.appendChild(p2)

    let div1 = document.createElement('div')
    div1.style.display='flex'
    my_order_div.appendChild(div1)

    let p3 = document.createElement('p')
    p3.style.margin='0'
    p3.style.width='60vw'
    p3.textContent=total_items+" items"
    div1.appendChild(p3)

    let p4 = document.createElement('p')
    p4.style.margin='0'
    p4.style.fontWeight='700'
    p4.textContent="$ "+price
    div1.appendChild(p4)

    let p6 = document.createElement('p')
    p6.style.margin='0'
    p6.textContent="Order Status: "
    my_order_div.appendChild(p6)

    let p7 = document.createElement('span')
    p7.style.fontWeight='700'
    p7.textContent=order_status
    p6.appendChild(p7)

}


function creator_page(){
    removeBanner()
    let username = getUsernameFromUrl()

    let about_us_header_header = document.createElement('div')
    about_us_header_header.classList.add("about_us_header_header")
    about_us_header_header.style.position="relative"
        let about_us_logo_text = document.createElement('p')
        about_us_logo_text.classList.add("about_us_logo_text")
        about_us_logo_text.textContent="Delish"
        about_us_header_header.appendChild(about_us_logo_text)
    document.body.appendChild(about_us_header_header)

    let asthetic_art = document.createElement('img')
    asthetic_art.classList.add("asthetic_art")
    asthetic_art.src="Assets/Images/Asthetic Art.png"
    document.body.appendChild(asthetic_art)

    let page_heading = document.createElement('p')
    page_heading.classList.add("My_Cart_heading")
    page_heading.textContent="Welcome Admin"
    document.body.appendChild(page_heading)

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        
        getResponseText = this.responseText;
        let order_nos = getResponseText.split(",")
        for(i = 1; i < order_nos.length;i++){
            const xhttp2 = new XMLHttpRequest();
            xhttp2.onload = function() {
                getResponseText2 = this.responseText;
                let details = getResponseText2.split(",")
                creator_orders_div(details[0],details[1],details[2],details[3],details[4],details[5],details[6],details[7])
            }
            xhttp2.open("GET", "PHP Files/admin2.php?doWhat="+order_nos[i]);
            xhttp2.send();
        }
    }
    xhttp.open("GET", "PHP Files/admin2.php?doWhat=1");
    xhttp.send();

}

function creator_orders_div(order_no,date,month,hour,minute,total_items,price,order_status){
    let months;
    if(month=="1"){months="January"}
    else if(month=="2"){months="Febuary"}
    else if(month=="3"){months="March"}
    else if(month=="4"){months="April"}
    else if(month=="5"){months="May"}
    else if(month=="6"){months="June"}
    else if(month=="7"){months="July"}
    else if(month=="8"){months="August"}
    else if(month=="9"){months="September"}
    else if(month=="10"){months="October"}
    else if(month=="11"){months="November"}
    else{months="December"}
    let my_order_div = document.createElement('div')
    my_order_div.classList.add("my_order_div")
    document.body.appendChild(my_order_div)

    let p1 = document.createElement('p')
    p1.style.margin='0'
    p1.style.fontWeight='700'
    p1.textContent=order_no
    my_order_div.appendChild(p1)

    let p2 = document.createElement('p')
    p2.style.margin='0'
    p2.textContent=date+" "+months+" at "+hour+":"+minute
    my_order_div.appendChild(p2)

    let div1 = document.createElement('div')
    div1.style.display='flex'
    my_order_div.appendChild(div1)

    let p3 = document.createElement('p')
    p3.style.margin='0'
    p3.style.width='60vw'
    p3.textContent=total_items+" items"
    div1.appendChild(p3)

    let p4 = document.createElement('p')
    p4.style.margin='0'
    p4.style.fontWeight='700'
    p4.textContent="$ "+price
    div1.appendChild(p4)

    let p6 = document.createElement('p')
    p6.style.margin='0'
    p6.textContent="Order Status: "
    my_order_div.appendChild(p6)

    let p7 = document.createElement('select')
    p7.style.fontWeight='700'
    p7.textContent=order_status
    p6.appendChild(p7)

    let o1 = document.createElement('option')
    o1.value="Order Placed"
    o1.textContent="Order Placed"
    p7.appendChild(o1);

    let o2 = document.createElement('option')
    o2.value="Order Processed"
    o2.textContent="Order Processed"
    p7.appendChild(o2);

    let o3 = document.createElement('option')
    o3.value="Ready To Pickup"
    o3.textContent="Ready To Pickup"
    p7.appendChild(o3);

    let o4 = document.createElement('option')
    o4.value="Delivered"
    o4.textContent="Delivered"
    p7.appendChild(o4);

    p7.value=order_status

    

    let submit_btn = document.createElement('button')
    submit_btn.classList.add("login_signUp_btn")
    submit_btn.id=order_no
    submit_btn.style.marginTop='5px'
    submit_btn.textContent="update"
    submit_btn.onclick=function(){updateOrderByAdmin(p7,order_no)}
    my_order_div.appendChild(submit_btn)
}

function updateOrderByAdmin(dropdown,order_no){
    console.log(dropdown.value);
    order_status=dropdown.value
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        getResponseText = this.responseText;
        console.log(getResponseText);
    }
    xhttp.open("GET", "PHP Files/admin.php?order_no="+order_no+"&order_status="+order_status);
    xhttp.send();
}