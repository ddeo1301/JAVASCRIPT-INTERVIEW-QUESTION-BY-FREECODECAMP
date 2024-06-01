MAP, SET, PRIOPRITYQUEUE, ARRAYS, STRING

1) MAP
    - hm.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
    - hm.put(key, value)
    - hm.putIfAbsent(arr[0], new ArrayList<>());
    - hm.get(key)
    - for(Map.Entry<Character, Integer> e : hm.entrySet()){
            e.getKey();
            e.getValue();
            pq.add(e);
        }
    - hm.equals(hm2);
    - hm.remove(key);
    - hm.containsKey(key);


2) SET


3) PRIORITY QUEUE
    - PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[1]-b[1]);
    - PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>((a,b) -> a.getValue()==b.getValue() ? a.getKey()-b.getKey() : b.getKey()-a.getKey());
    

 4) ARRAYS
    - char arr[] = str.toCharArray();
    - Arrays.equals(a1, a2);
    - int[] b = a.clone();
    - System.arrayCopy(a, 0, b, 0, 8);
    - int[] b = Arrays.copyOf(a, 3);
    - int[] b = Arrays.copyOfRange(a, 2, 9);
    - ARRAY TO ARRAYLIST
        - List<String> list = Arrays.asList(array);
        - Collections.addAll(list, array);


 5) ARRAYLIST
    - al.remove(index);
    - al.remove(Integer.valueOf(20)); // object
    - ARRAYLIST TO ARRAY CONVERSION
        - int[] arr = al.stream().mapToInt(i -> i).toArray();
        - Integer[] arr = new Integer[al.size()];
          arr = al.toArray(arr);


 6) STRING


 7) SOME EXTRAS
      - System.out.println("%.6f\n:,   );  // for 6 digit decimal
