var sieve = new Array();
var i = 0;
var maxcount = 100;
var maxsieve = 1000;
var prime = 0;
var count = 0;
var outfile = "primenumbers.txt";
var out ="";
var fs = require('fs');

// Build the Sieve.
for (i = 2; i <= maxsieve; i++)
{
    sieve[i] = 1;
}

// Use the Sieve to find primes and count them as they are found.
for (prime = 2; prime <= maxsieve && count < maxcount; prime++)
{
    if (sieve[prime] == 1)
    {
        count += 1;
        out=out+prime+",";
        for (i = prime * 2; i <= maxsieve; i += prime)
        {
            sieve[i] = 0;
        }
    }
}
var l = out.length;
out=out.substring(0,l-1);
fs.writeFileSync(outfile, out);  
