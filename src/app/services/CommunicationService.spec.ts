import { TestBed } from '@angular/core/testing';
import { CommunicationService } from './CommunicationService';

describe('CommunicationService', () => {
  let service: CommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit changes', () => {
    const testData = 'Test Data';
    let emittedData: any;

    service.changeEmitted$.subscribe(data => {
      emittedData = data;
    });

    service.emitChange(testData);
    expect(emittedData).toBe(testData);
  });

  // Add more tests here...
});
