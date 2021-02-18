
export enum ACCESS_TYPE {
  ORGANIZATION_GET,
  ORGANIZATION_SET,
  REPOSITORY_GET,
  REPOSITORY_SET,
  MODULE_GET,
  MODULE_SET,
  INTERFACE_GET,
  INTERFACE_SET,
  PROPERTY_GET,
  PROPERTY_SET,
  USER,
  ADMIN,
}
const inTestMode = process.env.TEST_MODE === 'true'

export class AccessUtils {
  public static async canUserAccess(
  
    curUserId: number,
   
    token?: string,
  ): Promise<boolean> {
    // 测试模式无权限
    if (inTestMode) {
      return true
    }

    // 无 session 且无 toeken 时拒绝访问
    if (!curUserId && !token) {
      return false
    }

   
    return false
  }

  public static isAdmin(curUserId: number) {
    if (inTestMode) {
      return true
    }
    return curUserId === 1
  }
}
