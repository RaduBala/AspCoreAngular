using System.Collections.Generic;
using System.Linq;
using AspCoreAngular.Models;
using AspCoreAngular.Persistance;
using AspCoreAngular.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AspCoreAngular.Controllers
{
    [Route("employee")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository employeeRepository;

        private readonly IUnitOfWork unitOfWork;

        private readonly IMapper mapper;

        public EmployeeController(IEmployeeRepository employeeRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork         = unitOfWork;
            this.employeeRepository = employeeRepository;
            this.mapper             = mapper;
        }

        [HttpGet("api/all")]
        public IEnumerable<EmployeeResource> GetAll()
        {
            List<Employee> employees = employeeRepository.GetAll().ToList();

            List<EmployeeResource> employeeResources = mapper.Map<List<Employee>,List<EmployeeResource>>(employees);

            return employeeResources;
        }

        [HttpGet("api/single/{id}")]
        public EmployeeResource Get(int id)
        {
            Employee employees = employeeRepository.Get(id);

            EmployeeResource employeeResources = mapper.Map<Employee,EmployeeResource>(employees);

            return employeeResources;
        }

        [HttpPost("api/create")]
        public IActionResult Create([FromBody] EmployeeResource employeeResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Employee employee = mapper.Map<EmployeeResource, Employee>(employeeResource);

            employeeRepository.Add(employee);

            unitOfWork.Commit();

            return Ok(employee);
        }

        [HttpPut("api/update")]
        public IActionResult Update([FromBody] EmployeeResource employeeResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Employee employee = mapper.Map<EmployeeResource, Employee>(employeeResource);

            employeeRepository.Update(employee);

            unitOfWork.Commit();

            return Ok();
        }

        [HttpDelete("api/delete/{id}")]
        public IActionResult Delete(int id)
        {
            employeeRepository.Remove(id);

            unitOfWork.Commit();

            return Ok(id);
        }
    }
}