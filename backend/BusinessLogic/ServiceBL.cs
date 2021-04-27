using DataAccess;
using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class ServiceBL
    {
        ServiceRepository _serviceRepository;
        public ServiceBL(ServiceRepository serviceRepository)
        {
            _serviceRepository = serviceRepository;
        }

        public List<Service> GetAll()
        {
            return _serviceRepository.GetAll();
        }
    }
}
