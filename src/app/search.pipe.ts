
import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './models/task.model';

@Pipe({
  name: "search",
  pure: false
})
