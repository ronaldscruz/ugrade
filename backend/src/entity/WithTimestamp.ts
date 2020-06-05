import { CreateDateColumn, UpdateDateColumn } from "typeorm";

abstract class WithTimestamp {
  /**
   * DB insert time.
   */
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public createdAt: Date;

  /**
   * DB last update time.
   */
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updatedAt: Date;
}

export default WithTimestamp;
