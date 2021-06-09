
    def numberOfWays(N):
        def countWays(n):
            if n==0:
                return 0
            if n==1:
                return 1
                
            return (countWays(n-1) + countWays(n-2))
        return countWays(N)

    print(numberOfWays(3))
