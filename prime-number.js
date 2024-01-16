// Function to find prime numbers using the Sieve of Eratosthenes algorithm
function findPrimeNumbers(limit) {
    // array to track the primality of numbers, initially assuming all numbers are prime
    let isPrime = Array(limit + 1).fill(true);
  
    // 0 and 1 are not prime numbers, they get marked as false
    isPrime[0] = isPrime[1] = false;
  
    // Iterate from 2 to the square root of the limit
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      // If i is marked as prime, mark its multiples as not prime
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // array to store the prime numbers
    const primes = [];
  
    // Collect the prime numbers from the isPrime array
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    // Return the array of prime numbers
    return primes;
  }
  
  // Find prime numbers up to 50
  const limit = 50;
  const primeNumbers = findPrimeNumbers(limit);
  
  // Display the result in the console
  console.log(`Prime numbers up to ${limit}:`, primeNumbers);