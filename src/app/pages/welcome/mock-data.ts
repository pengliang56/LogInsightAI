export const listData = {
  "data": [
    {
      "app.code": "ipa",
      "app.instance": "X01SG23487",
      "log.thread": "Exception in thread \"main\" java.lang.OutOfMemoryError: Java heap space\n\n\tat java.util.Arrays.copyOf(Arrays.java:3210)\n\tat java.util.Arrays.copyOf(Arrays.java:3181)\n\tat java.util.ArrayList.grow(ArrayList.java:237)\n\tat java.util.ArrayList.ensureExplicitCapacity(ArrayList.java:1008)\n\tat java.util.ArrayList.ensureCapacity(ArrayList.java:992)\n\tat java.util.ArrayList.add(ArrayList.java:341)\n\tat com.example.MyApplication.main(MyApplication.java:15)\n",
      "ai.seari": "Increase the heap size by using the JVM option -Xmx. For example, use -Xmx512m to set the maximum heap size to 512 MB."
    },
    {
      "app.code": "ipa",
      "app.instance": "X01SG23488",
      "log.thread": "Exception in thread \"main\" org.jboss.remoting.ConnectionFailedException: Failed to connect to server at localhost:4447\n\n\tat org.jboss.remoting.Client.connect(Client.java:152)\n\tat org.jboss.as.jmx.MBeanServerImpl.start(MBeanServerImpl.java:218)\n\tat org.jboss.as.server.CurrentServiceContainer.start(CurrentServiceContainer.java:58)\n\tat org.jboss.msc.service.ServiceContainer.start(ServiceContainer.java:421)\n\tat org.jboss.as.server.Main.main(Main.java:56)\n",
      "ai.seari": "Check if the JBoss server is running and accessible at the specified address. Ensure that the port 4447 is not blocked by a firewall."
    },
    {
      "app.code": "ipa",
      "app.instance": "X01SG23489",
      "log.thread": "Exception in thread \"main\" java.lang.NullPointerException: Cannot invoke \"String.length()\" because \"str\" is null\n\n\tat com.example.StringManipulation.main(StringManipulation.java:10)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\n",
      "ai.seari": "Ensure that the variable is not null before performing operations. You can add a null check like: if (str != null) { /* perform operations */ }"
    },
    {
      "app.code": "ipa",
      "app.instance": "X01SG23490",
      "log.thread": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5\n\n\tat com.example.ArrayExample.main(ArrayExample.java:12)\n",
      "ai.seari": "Check the array index and ensure it is within the valid range (0 to length-1)."
    },
    {
      "app.code": "ipa",
      "app.instance": "X01SG23493",
      "log.thread": "Exception in thread \"main\" java.sql.SQLException: Cannot connect to database\n\n\tat com.example.DatabaseConnector.connect(DatabaseConnector.java:20)\n",
      "ai.seari": "Check database credentials, URL, and ensure the database server is running."
    }
  ]
}
