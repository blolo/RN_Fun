
export function sumOf2Numbers(num1: number , num2: number): number{
    return num1 + num2;
}

export function repeatString(text: string, iteration: number){

    for (var i = 0; i < iteration; i++) {
        console.log(text + "\n") ;
    }
}


export function countStringOccurrence(firstStr: string , secondStr: string): number {

    return firstStr.split(secondStr).length - 1;

} 

export function stringRepresentationOfDigits(num: number)  {

   const strNumber: string = num.toString();
   let list: string[] = strNumber.split('');
   let textValue: string = "";

   for (let entry of list) {
       switch(entry){
        
            case '0':
            textValue = textValue + ' zero';
            break;
            case '1':
            textValue = textValue + ' one';
            break;
            case '2':
            textValue = textValue + ' two';
            break;
            case '3':
            textValue = textValue + ' three';
            break;
            case '4':
            textValue = textValue + ' four';
            break;
            case '5':
            textValue = textValue + ' five';
            break;
            case '6':
            textValue = textValue + ' six';
            break;
            case '7':
            textValue = textValue + ' seven';
            break;
            case '8':
            textValue = textValue + ' eight';
            break;
            case '9':
            textValue = textValue + ' nine';
            break;
          
       }
}
console.log(textValue); 

}