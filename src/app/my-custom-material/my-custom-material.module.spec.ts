import { MyCustomMaterialModuleModule } from './my-custom-material-module.module';

describe('MyCustomMaterialModuleModule', () => {
  let myCustomMaterialModuleModule: MyCustomMaterialModule;

  beforeEach(() => {
    myCustomMaterialModuleModule = new MyCustomMaterialModule();
  });

  it('should create an instance', () => {
    expect(myCustomMaterialModuleModule).toBeTruthy();
  });
});
