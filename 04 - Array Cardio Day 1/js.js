// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventores = [
        { primeiro: 'Albert', ultimo: 'Einstein', ano: 1879, morreu: 1955 },
        { primeiro: 'Isaac', ultimo: 'Newton', ano: 1643, morreu: 1727 },
        { primeiro: 'Galileo', ultimo: 'Galilei', ano: 1564, morreu: 1642 },
        { primeiro: 'Marie', ultimo: 'Curie', ano: 1867, morreu: 1934 },
        { primeiro: 'Johannes', ultimo: 'Kepler', ano: 1571, morreu: 1630 },
        { primeiro: 'Nicolaus', ultimo: 'Copernicus', ano: 1473, morreu: 1543 },
        { primeiro: 'Max', ultimo: 'Planck', ano: 1858, morreu: 1947 },
        { primeiro: 'Katherine', ultimo: 'Blodgett', ano: 1898, morreu: 1979 },
        { primeiro: 'Ada', ultimo: 'Lovelace', ano: 1815, morreu: 1852 },
        { primeiro: 'Sarah E.', ultimo: 'Goode', ano: 1855, morreu: 1905 },
        { primeiro: 'Lise', ultimo: 'Meitner', ano: 1878, morreu: 1968 },
        { primeiro: 'Hanna', ultimo: 'Hammarström', ano: 1829, morreu: 1909 }
    ]
  
    const pessoas = [
         'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
         'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
         'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
         'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
         'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
         'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
    ]
  
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const sec15 = inventores.filter((cada) => {
        if (cada.ano >= 1500 && cada.ano < 1600) {
            return true
        }
    })
    
    console.log('#01')
    console.table(sec15)
  
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const nomesCompletos = inventores.map(cada => `${cada.primeiro} ${cada.ultimo}`)

    console.log('#02')
    console.log(nomesCompletos)
  
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordenado = inventores.sort((primeiro, segundo) => {
        if (primeiro.ano > segundo.ano) {
            return 1
        }
        else {
            return -1
        }
    })

    const ordenado2 = inventores.sort((a, b) => a.ano > b.ano ? 1 : -1)

    console.log('#03')
    console.table(ordenado)
    console.table(ordenado2)
    
  
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const anosTotais = inventores.reduce((total, cada) => {
        return total + (cada.morreu - cada.ano) 
    }, 0)
        
    console.log('#04')
    console.log(anosTotais)


    // 5. Sort the inventors by years lived
    const maisvelho = inventores.sort(function(a, b) {
        const ultimoCara = a.morreu - a.ano
        const proximoCara = b.morreu - b.ano
        return ultimoCara > proximoCara ? -1 : 1
    })

    console.log('#05')
    console.table(maisvelho)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
    /* const categoria = document.querySelector('.mw-category')
    const links = Array.from(categoria.querySelectorAll('a'))  // ou [...categoria.querySelectorAll('a')]

    const de = links.map(link => link.textContent).filter(nomerua => nomerua.includes('de')) */


  
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.log('#07')

    const alfabet = pessoas.sort(function(ultimo, proximo) {
        const [a_utimo, a_primeiro] = ultimo.split(', ')
        const [b_utimo, b_primeiro] = proximo.split(', ')
        return a_utimo > b_utimo ? 1 : -1
    })
    
    console.log(alfabet)
  
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const dado = [
          'carro', 'carro', 'caminhao', 'caminhao', 'bicicleta', 'caminhada', 'carro', 'van', 'bicicleta', 'caminhada',
          'carro', 'van', 'carro', 'caminhao'
     ]

     console.log('#08')

     const transporte = dado.reduce((objeto, item) => {
        console.log(item)
        return objeto
    }, {})

