MAP, SET, PRIOPRITYQUEUE, ARRAYS, STRING

MAP
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

SET

PRIORITY QUEUE
 - PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[1]-b[1]);
 - PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>((a,b) -> a.getValue()==b.getValue() ? a.getKey()-b.getKey() : b.getKey()-a.getKey());
 

SOME EXTRAS
 - System.out.println("%.6f\n:,   );  // for 6 digit decimal

ARRAYS
 - char arr[] = str.toCharArray();
 - Arrays.equals(a1, a2);

STRING