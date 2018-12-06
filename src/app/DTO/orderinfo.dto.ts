export class IOrderInfo {
  public OrderID?: number = 0;
  public OrderCode?: string = "Chưa thanh toán";
  public AccountID: number = 0;
  public Username: string = "";
  public FullName: string = "";
  public DeliveryAddress: string = "";
  public Mobile: string = "";
  public Description: string = "";
  public TotalAmount: number = 0;
  public Status: number = 0;
  public Note: string = "";
  public OrderDetail?: any[] = [];
  public OrderDetailJSON?: string = "";
  public TotalPricesTemp: number = 0;
  public PaymentNote: string = "";
  public PaymentStatus: number = 0;
  public PaymentType: number = 0;
}

