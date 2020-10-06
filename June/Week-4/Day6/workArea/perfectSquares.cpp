#include <iostream>
using namespace std;
class PerfectSquares
{
public:
    int *perfect_set_generator(int k)
    {
        int *perfect_set = new int[k + 1];
        int j = 0;
        for (int i = 1; i <= k; i++)
        {
            perfect_set[j] = i * i;
            // cout << "Perfect Set:" << perfect_set[j];
            j++;
        }
        // cout << "Value of J: " << j;
        return perfect_set;
    }
    int perfectSquares(int n)
    {
        int *perfect_set = perfect_set_generator(n);
        // perfect_set[n] = perfect_set_generator(n);
        // cout << "Perfect Set: " << perfect_set;
        // cout << "Perfect Set: " << perfect_set.length();
        // int *perfect_set_length = perfect_set;
        // cout << "Perfect Set Length: " << perfect_set;
        // int perfect_set_length = *(&perfect_set - 1) - perfect_set;
        // cout << "Length: " << perfect_set_length;
        for (int i = 0; i < n; i++)
        {
            cout << "Element: " << perfect_set[i];
        }
    }
};

int main()
{
    PerfectSquares ps;
    int n;
    cout << "Enter the Value of n: ";
    cin >> n;
    ps.perfectSquares(n);
}