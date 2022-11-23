let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.getElementById("Inp").value = string
            } else if (e.target.innerHTML == 'C') {
                string = "";
                document.getElementById("Inp").value = string
            } else if (e.target.innerHTML == 'X') {
                string = string + '*';
                document.getElementById("Inp").value = string
            } else {
                string = string + e.target.innerHTML;
                document.getElementById("Inp").value = string
            }
        } catch (error) {
            alert("Error! Please Enter Correct Value!!!");
            string = "";
            document.getElementById("Inp").value = string;
        }

    })
})