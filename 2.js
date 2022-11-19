n = 10
let fruit = ['kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple',
'cucumber', 'pineapple',
'cucumber',
'orange',
'grape',
'orange',
'grape',
'apple',
'grape',
'cherry',
'pear',
'cherry',
'pear',
'kiwi',
'banana',
'kiwi',
'apple',
'melon',
'banana', 'melon',
'pineapple',
'melon',
'pineapple',
'cucumber',
'orange',
'apple',
'orange',
'grape',
'orange',
'grape',
'cherry',
'pear',
'cherry',
'pear',
'apple',
'pear',
'kiwi',
'banana',
'kiwi',
    'banana',
'melon',
'pineapple',
'melon',
'apple',
'cucumber',
'pineapple',
'cucumber',
'orange',
'cucumber',
'orange',
'grape',
'cherry',
'apple',
'cherry',
'pear',
'cherry',
'pear',
'kiwi',
'pear',
'kiwi',
'banana',
'apple',
'banana',
'melon', 'pineapple', 'melon'
,'pineapple'
,'cucumber'
,'pineapple'
,'cucumber'
,'apple'
,'grape'
,'orange'
,'grape'
,'cherry'
,'grape'
,'cherry'
,'pear'
,'cherry'
,'apple'
,'kiwi'
 ,'banana'
,'kiwi'
,'banana'
,'melon'
 ,'banana'
,'melon'
,'pineapple'
,'apple'
,'pineapple']
numbers = (n) => (Array.from(String(n)).map(i=>Number(i)))
summ = (n) => ( numbers(n).reduce( (sum, current) => (sum + current) ) );

do {
    n = n-summ (n);
    } while (n>100)
console.log(fruit[n])



