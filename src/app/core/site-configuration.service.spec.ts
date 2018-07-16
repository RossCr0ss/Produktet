import { TestBed, inject } from '@angular/core/testing';

import { SiteConfigurationService } from './site-configuration.service';

describe('SiteConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteConfigurationService]
    });
  });

  it('should be created', inject([SiteConfigurationService], (service: SiteConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
