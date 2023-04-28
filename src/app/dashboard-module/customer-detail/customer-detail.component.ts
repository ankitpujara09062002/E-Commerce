import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  // Public Variable

  public userDetails: any = [
    {
      id: '1',
      productName: [
        {
          name: 'watch',
          value: '100'
        },
        {
          name: 'laptop',
          value: '10000'
        }, {
          name: 'phone',
          value: '5000'
        }
      ]
    },
    {
      id: '2',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'laptop',
          value: '8000'
        }
      ]
    }, {
      id: '3',
      productName: [
        {
          name: 'tv',
          value: '100'
        },
        {
          name: 'laptop',
          value: '9000'
        }, {
          name: 'phone',
          value: '8500'
        }
      ]
    }, {
      id: '4',
      productName: [
        {
          name: 'laptop',
          value: '5635'
        }
      ]
    }, {
      id: '5',
      productName: [
        {
          name: 'phone',
          value: '800'
        }
      ]
    }, {
      id: '6',
      productName: [
        {
          name: 'tv',
          value: '10000'
        }
      ]
    }, {
      id: '7',
      productName: [
        {
          name: 'watch',
          value: '100'
        },
        {
          name: 'laptop',
          value: '1900'
        }, {
          name: 'phone',
          value: '8900'
        }
      ]
    }, {
      id: '8',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'laptop',
          value: '57000'
        }, {
          name: 'tv',
          value: '4825'
        }
      ]
    }, {
      id: '9',
      productName: [
        {
          name: 'watch',
          value: '2000'
        },
        {
          name: 'tv',
          value: '1000'
        }, {
          name: 'phone',
          value: '8000'
        }
      ]
    }, {
      id: '10',
      productName: [
        {
          name: 'laptop',
          value: '15000'
        }, {
          name: 'phone',
          value: '9000'
        }
      ]
    }, {
      id: '11',
      productName: [
        {
          name: 'phone',
          value: '5065'
        }
      ]
    }, {
      id: '12',
      productName: [
        {
          name: 'watch',
          value: '9000'
        },
        {
          name: 'laptop',
          value: '88900'
        }, {
          name: 'phone',
          value: '8795'
        }
      ]
    }, {
      id: '13',
      productName: [
        {
          name: 'watch',
          value: '5000'
        },
        {
          name: 'laptop',
          value: '8000'
        }, {
          name: 'phone',
          value: '900'
        }
      ]
    }, {
      id: '14',
      productName: [
        {
          name: 'watch',
          value: '900'
        },
        {
          name: 'laptop',
          value: '56949'
        }, {
          name: 'tv',
          value: '8925'
        }
      ]
    }, {
      id: '15',
      productName: [
        {
          name: 'tv',
          value: '10000'
        }
      ]
    }, {
      id: '16',
      productName: [
        {
          name: 'watch',
          value: '1000'
        }
      ]
    }, {
      id: '17',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'tv',
          value: '9000'
        }, {
          name: 'phone',
          value: '555'
        }
      ]
    }, {
      id: '18',
      productName: [
        {
          name: 'watch',
          value: '900'
        },
        {
          name: 'laptop',
          value: '88000'
        }, {
          name: 'tv',
          value: '19000'
        }
      ]
    }, {
      id: '19',
      productName: [
        {
          name: 'watch',
          value: '2000'
        },
        {
          name: 'tv',
          value: '19000'
        }, {
          name: 'phone',
          value: '900'
        }
      ]
    }, {
      id: '20',
      productName: [
        {
          name: 'watch',
          value: '800'
        },
        {
          name: 'laptop',
          value: '1600'
        }, {
          name: 'phone',
          value: '1900'
        }
      ]
    }, {
      id: '21',
      productName: [
        {
          name: 'watch',
          value: '1560'
        },
        {
          name: 'laptop',
          value: '8900'
        }, {
          name: 'phone',
          value: '1980'
        }
      ]
    }, {
      id: '22',
      productName: [
        {
          name: 'watch',
          value: '700'
        },
        {
          name: 'tv',
          value: '8792'
        }, {
          name: 'phone',
          value: '558'
        }
      ]
    }, {
      id: '23',
      productName: [
        {
          name: 'tv',
          value: '9100'
        },
        {
          name: 'laptop',
          value: '19000'
        }, {
          name: 'phone',
          value: '125'
        }
      ]
    }, {
      id: '24',
      productName: [
        {
          name: 'phone',
          value: '895'
        }
      ]
    }, {
      id: '25',
      productName: [
        {
          name: 'watch',
          value: '900'
        },
        {
          name: 'laptop',
          value: '8972'
        }, {
          name: 'phone',
          value: '557'
        }
      ]
    }, {
      id: '26',
      productName: [
        {
          name: 'watch',
          value: '900'
        },
        {
          name: 'laptop',
          value: '569'
        }, {
          name: 'phone',
          value: '147'
        }
      ]
    }, {
      id: '27',
      productName: [
        {
          name: 'watch',
          value: '900'
        },
        {
          name: 'laptop',
          value: '8956'
        }, {
          name: 'phone',
          value: '8791'
        }
      ]
    }, {
      id: '28',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'laptop',
          value: '9800'
        }, {
          name: 'phone',
          value: '891'
        }
      ]
    }, {
      id: '29',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'laptop',
          value: '69444'
        }, {
          name: 'phone',
          value: '445'
        }
      ]
    }, {
      id: '30',
      productName: [
        {
          name: 'watch',
          value: '1000'
        },
        {
          name: 'laptop',
          value: '4477'
        }, {
          name: 'phone',
          value: '4885'
        }
      ]
    },
  ];
  public single: any;
  public view: any = [700, 400];
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private activatedRoute: ActivatedRoute) {
    // Get queryParams in url
    this.activatedRoute.queryParams
      .subscribe((params: any) => {
        this.single = this.userDetails.find((res: any) => {
          return res.id === params.id
        }).productName
      });
  }

  ngOnInit(): void {
  }

}
