import { Component, OnInit } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  ReactiveFormsModule,
  FormControl,
  FormRecord,
  NonNullableFormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { listData } from './mock-data';

interface childPanelData {
  active: boolean;
  name: string;
  content: string;
}
interface PanelData {
  active: boolean;
  disabled: boolean;
  name: string;
  childPanel: childPanelData[];
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzIconModule,
    NzGridModule,
    NzCollapseModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  panels: PanelData[] = [];

  validateForm: FormRecord<FormControl<string>>;
  controlArray: Array<{
    index: number;
    lableName: string;
    lableValue: string;
    show: boolean;
  }> = [];
  isCollapse = true;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.record({});
  }

  ngOnInit() {
    let searchItems = [
      { lableName: 'id', lableValue: 'log.id' },
      { lableName: 'weight', lableValue: 'log.weight' },
      { lableName: 'appcode', lableValue: 'log.appcode' },
      { lableName: 'server', lableValue: 'log.server' },
      { lableName: 'type', lableValue: 'log.type' },
      { lableName: 'date', lableValue: 'log.date' },
      { lableName: 'thread', lableValue: 'log.thread' },
    ];
    searchItems.map((item, i) => {
      const { lableName, lableValue } = item;
      this.controlArray.push({ index: i, lableName, lableValue, show: i < 6 });
      this.validateForm.addControl(item.lableValue, this.fb.control(''));
    });

    this.panels = listData.data.map((data) => {
      return {
        active: false,
        disabled: false,
        name: `APP Code: ${data['app.code']} - APP Instance: ${data['app.instance']}`,
        childPanel: [
          {
            active: false,
            name: 'Thread',
            content: data['log.thread'],
          },
          {
            active: false,
            name: 'Seari',
            content: data['log.thread'],
          },
        ],
      };
    });
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }
}
