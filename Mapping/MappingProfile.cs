using System.Linq;
using AspCoreAngular.Models;
using AspCoreAngular.Resources;
using AutoMapper;

namespace AspCoreAngular.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Device, DeviceResource>();
            CreateMap<Employee, EmployeeResource>()
                .ForMember(er => er.Devices, memberOptions => memberOptions.MapFrom(er => er.Devices.Select(id => id.Id)));

            CreateMap<EmployeeResource, Employee>();
            CreateMap<DeviceResource, Device>();
        }
    }
}