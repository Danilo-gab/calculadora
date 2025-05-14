const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll("button");

let current = "";

botoes.forEach(button => {
    button.onclick = () => {
        const value = button.textContent;

        if (value === "AC") {
            current = "";
            resultado.value = "0";
        } else if (value === "=") {
            try {
                current = current
                    .replace(/x/g, "*")
                    .replace(/-/g, "-")
                    .replace(/%/g, "/100*");
            
                resultado.value = eval(current).toString();
                current = resultado.value;
            } catch {
                resultado.value = "Erro";
                current = "";
            }
        }
        else {
            if (current === "0" && value !== ".") {
                current = value;
            } else {
               current += value;
            }
            resultado.value = current;
        }
    };
});

