import React, {useState} from "react";
import '../styles/App.css';

function App() {
        const [name1,setName1] = useState("");
        const [name2,setName2] = useState("");
        const [answer, setAnswer] = useState("");

        const calculateRelationship = () => {
            if(!name1.trim() || !name2.trim()){
                setAnswer("Please Enter valid input");
                return;
            }

            let arr1 = name1.split("");
            let arr2 = name2.split("");

            for(let i=0; i<arr1.length; i++){
                const index = arr2.indexOf(arr1[i]);
                if(index !== -1){
                    arr1[i] = null;
                    arr2[index] = null;
                }
            }
            const remaining1 = arr1.filter(ch => ch !== null).length;
            const remaining2 = arr2.filter(ch => ch !== null).length;

            const sum = remaining1 + remaining2;
            const result = sum % 6;

            const flamesMap = {
                1: "Friends",
                2: "Love",
                3: "Affection",
                4: "Marriage",
                5: "Enemy",
                0: "Siblings",
            };
            setAnswer(flamesMap[result]);
        };
        const clearForm = () => {
             setName1("");
  setName2("");
  setAnswer("");
        };


        return(
            <div id="main">
               <input data-testid="input1"  name="name1" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Enter first name"/>
               <input data-testid="input2"  name="name2" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Enter second name"/>

               <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateRelationship}>
                       Calculate Relationship Future
               </button>

               <button data-testid="clear" name="clear" onClick={clearForm}>
                Clear
               </button>

               <h3 data-testid="answer">{answer}</h3>

            </div>
        )
    }


export default App;
