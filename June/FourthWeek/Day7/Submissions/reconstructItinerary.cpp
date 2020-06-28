#include <bits/stdc++.h>
using namespace std;
void print_vector(vector<auto> v)
{
    cout << "[";
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << ", ";
    }
    cout << "]" << endl;
}
class Solution
{
public:
    vector<string> ret;
    map<string, multiset<string>> graph;
    vector<string> findItinerary(vector<vector<string>> &tickets)
    {
        for (int i = 0; i < tickets.size(); i++)
        {
            string u = tickets[i][0];
            string v = tickets[i][1];
            graph[u].insert(v);
        }
        visit("JFK");
        reverse(ret.begin(), ret.end());
        return ret;
    }
    void visit(string airport)
    {
        while (graph[airport].size())
        {
            string x = *(graph[airport].begin());
            graph[airport].erase(graph[airport].begin());
            visit(x);
        }
        ret.push_back(airport);
    }
};
main()
{
    Solution ob;
    vector<vector<string>> v = {{"MUC", "LHR"}, {"JFK", "MUC"}, {"SFO", "SJC"}, {"LHR", "SFO"}};
    print_vector(ob.findItinerary(v));
}