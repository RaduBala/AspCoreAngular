using System.Collections.Generic;
using AspCoreAngular.Models;
using AspCoreAngular.Persistance;
using AspCoreAngular.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AspCoreAngular.Controllers
{
    [Route("device")]
    public class DeviceController : Controller
    {
        private readonly IDeviceRepository DeviceRepository;

        private readonly IUnitOfWork unitOfWork;

        private readonly IMapper mapper;

         public DeviceController(IDeviceRepository DeviceRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper           = mapper;
            this.unitOfWork       = unitOfWork;
            this.DeviceRepository = DeviceRepository;
        }

        [HttpGet("api/all")]
        public IEnumerable<Device> GetAll()
        {
            return DeviceRepository.GetAll();
        }

        [HttpGet("api/single/{id}")]
        public DeviceResource Get(int id)
        {
            Device Device = DeviceRepository.Get(id);

            DeviceResource DeviceResources = mapper.Map<Device,DeviceResource>(Device);

            return DeviceResources;
        }

        [HttpPost("api/create")]
        public IActionResult Create([FromBody] DeviceResource DeviceResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Device Device = mapper.Map<DeviceResource, Device>(DeviceResource);

            DeviceRepository.Add(Device);

            unitOfWork.Commit();

            return Ok(Device);
        }

        [HttpPut("api/update")]
        public IActionResult Update([FromBody] DeviceResource DeviceResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Device Device = mapper.Map<DeviceResource, Device>(DeviceResource);

            DeviceRepository.Update(Device);

            unitOfWork.Commit();

            return Ok();
        }

        [HttpDelete("api/delete/{id}")]
        public IActionResult Delete(int id)
        {
            DeviceRepository.Remove(id);

            unitOfWork.Commit();

            return Ok(id);
        }
    }
}