const code44 = document.getElementById('code44');
code44.onclick = Code44;
function Code44() {
  let arr = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
  function unique(arr) {
    let n = arr.length, k = 0, newarr = [];
    for (let i = 0; i < n; i++) 
    { let j = 0;
      while (j < k && newarr[j] !== arr[ i ]) j++;
      if (j == k) newarr[k++] = arr[ i ];
    }
    return newarr;
}
alert( unique(arr) );
}