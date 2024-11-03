console.log('script engaged');

let main_container = document.querySelector('.container');

let test_text = document.createElement('p');


main_container.backgroundColor = 'green';


grid_button = document.getElementById('gridbutton');
grid_button.style.color = 'red';
generate_grid(256);
grid_button.addEventListener("click", () =>{
    user_grid = prompt('How big do you want the grid?');
    generate_grid(user_grid);
});


function generate_grid(size)
{
    main_container.innerHTML = "";
    main_container.style.width = (20*Math.sqrt(size)) + 'px';
    main_container.style.height = (20*Math.sqrt(size)) + 'px';
    for (let  i= 0; i < size; i++)
        {
            let test_div = document.createElement('div');
            
            test_div.style.color = 'lightblue';
            test_div.style.border = '2px solid blue'
            test_div.style.borderColor = 'yellow';
            test_div.style.backgroundColor = 'black';
            
            test_div.style.width = "20px";
            test_div.style.height = "20px";
            test_div.style.boxSizing = 'border-box';
        
            test_div.addEventListener("mouseenter", () => {
                const red = Math.floor(Math.random()* 255) ;
                const green = Math.floor(Math.random()* 255) ;
                const blue = Math.floor(Math.random()* 255) ;
               
                test_div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
              
                
            })
        
            test_div.addEventListener("mouseleave", () => {
                setTimeout(() =>{
                    test_div.style.backgroundColor = 'black';
                }, 2000)
                
            })
        
            main_container.appendChild(test_div);
        
        }
}