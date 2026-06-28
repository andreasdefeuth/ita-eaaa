using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nameP1 = "Andreas";
            int ageP1 = 25;
            string genderP1 = "Male";
            string countryP1 = "Denmark";
            string person1 = "Name = " + nameP1 + ", Age = " + ageP1 + ", Gender = " + genderP1 + ", Country = " + countryP1;
            
            string nameP2 = "Frederik";
            int ageP2 = 25;
            string genderP2 = "Male";
            string countryP2 = "Denmark";
            string person2 = "Name = " + nameP2 + ", Age = " + ageP2 + ", Gender = " + genderP2 + ", Country = " + countryP2;

            string nameP3 = "Alexander";
            int ageP3 = 25;
            string genderP3 = "Male";
            string countryP3 = "Denmark";
            string person3 = "Name = " + nameP3 + ", Age = " + ageP3 + ", Gender = " + genderP3 + ", Country = " + countryP3;

            Console.WriteLine("Person 1: " + person1);
            Console.WriteLine("Person 2: " + person2);
            Console.WriteLine("Person 3: " + person3);
        }
    }
}
