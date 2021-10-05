using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    // Interface does not contains any implementation logic 
    //but has only signatures of the functunality the interface provides
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}